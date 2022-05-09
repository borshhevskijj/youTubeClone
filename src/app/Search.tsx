import React,{ useState, useEffect,useMemo}  from 'react'
import axios from "axios";
// import  from 'react'
import cl from '../styles/search.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { Ivideos, IvideoItems} from '../interfaces/searchResult'
import {addLastSearchRequest,addToFavorites} from '../store/SearchSlice'
// import { JsonPlhdr } from '../interfaces/jsonPlaceHolder'
// api 'key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw'
// import {jsonVideosResult} from './youTubeApi'
// import { video } from './api/youTubeApi';
// import useDebounce from '../customHooks/useDebounce';
import useDebounce from './../customHooks/useDebounce';


if(localStorage.getItem('lastSearchRequest') === ''){
  localStorage.removeItem('lastSearchRequest')
}
export default function Search() {
    const dispatch = useDispatch(); 
    // const selector = useSelector( (state:any) => state.AddToSlice.AddToSlice);

    const lastSearchRequest = localStorage.getItem('lastSearchRequest')//получаем последний запрос

    const [maxResult,setMaxResult] = useState<number>(6)
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео     
    const [inputValue, setInputValue]= useState <string | undefined> (lastSearchRequest??'как написать свой ютуб?') // инпут
    const debouncedInput = useDebounce(inputValue,700)
    const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом

    const [viev,setViev] = useState<boolean>(JSON.parse(window.localStorage.getItem('viev') as string) || false) // для изменения списка с видео
    const [toggle,setToggle] = useState<boolean>(JSON.parse(window.localStorage.getItem('toggle') as string) ||false)
    
    
    const videosToColumn =  'repeat(1,minmax(50px,1fr))';
    const videosToRow = 'repeat(3,minmax(100px,1fr))';

    
    const lastSearchResult=()=>{
      handToggle(setToggle,toggle)
      // HToggle()      
      localStorage.setItem('lastSearchRequest',inputValue as string) //устанавливаем последний  запрос
    }
    // const HToggle =()=> setToggle(!toggle)
    

//  при нажатии на кнопку "Найти" сохраняет в LS значение флага(true|false)
    useEffect(()=>{
      setToggle(JSON.parse(localStorage.getItem('toggle') as string))
    },[])

    useEffect(()=>{
      localStorage.setItem('toggle',JSON.stringify(toggle))
    },[toggle])
    // console.log(`${toggle} - toggle `);
    // 

// при нажатии на кнопку смены вида сохраняет в LS значение флага(true|false)
    useEffect(()=>{
      setViev(JSON.parse(localStorage.getItem('viev') as string))
    },[])

    useEffect(()=>{
      localStorage.setItem('viev',JSON.stringify(viev))
    },[viev])
    // console.log(`${viev} - viev `);
//

    const handToggle= (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable:boolean)=> { // переключатель состояний
        setFn(!variable)
      }
      
      const addMoreVideos =()=> {
        setMaxResult(maxResult + 6)
      }

        // dispatch(addLastSearchRequest(inputValue))
    useEffect(() => {

      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
      .then(res => {
        const video:Ivideos = res.data
      // const videoMem = useMemo(() =>setVideos(video), [video]) 
        setVideos(video)
        console.log('обновляется')
      })  
},[toggle,maxResult]) 

// extendableEvent.waitUntil(promise);

  

return (
    <section  className={cl.wrapper}>
        <div className={cl.search}>

            <h1>Поиск видео</h1>

            <div className={cl.input_field}>

                <input
                type="text"
                required
                
                spellCheck={false}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={()=> lastSearchResult() } className={cl.searchButton}>НАЙТИ</button>
            </div>
{/* dispatch(addLastSearchRequest(inputValue)) */}

        </div>

        <div className={cl.searchResult}>
          <p> Видео по запросу <strong>`{debouncedInput}`</strong> <span>{videos?.pageInfo.totalResults}</span></p>
          <div className={cl.changeVievIcons}>
            <button onClick={() => handToggle(setViev,viev)} className={cl.columnVideo}> { viev ? '+' : '-'} </button>
          </div>
        </div>


        {/* <iframe src="https://www.youtube.com/results?search_query=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8" frameBorder="0"></iframe> */}
      <div style={{gridTemplateColumns:`${ viev ? videosToColumn : videosToRow}`}} className={cl.iFrameYouTubeVideoWrapper} >
        {
         videos
        ? videos?.items.map( (item:IvideoItems) => 
            <div key={item.id.videoId}  className={cl.iFrameYouTubeVideo}>
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                {/* <p>{item.snippet.title}</p> */}
                <p>{item.snippet.channelTitle}</p>
                <button 
                onClick={()=> dispatch(addToFavorites(`https://www.youtube.com/embed/${item.id.videoId}`))} 
                className={cl.addToFavorite}
                >LIKE
                </button>
            </div>
          )
        : <div>Ничего не найдено</div>
        }
        {/* <iframe src='https://www.youtube.com/watch?v=XXYlFuWEuKI' title='zxc' frameBorder="0"></iframe> */}
        {/* <iframe src="https://www.youtube.com/results?search_query=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8" title='f' frameBorder="2"></iframe> */}

      </div>
      <button onClick={()=> addMoreVideos()}> Показать еще</button>

        {/*  src={`https://www.youtube.com/watch?v=${item.id.videoId}`} фулскрин */}
      </section>
  )  
}
