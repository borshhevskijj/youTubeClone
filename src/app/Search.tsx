import React,{ useState, useEffect, useRef}  from 'react'
import axios from "axios";
// import  from 'react'
import cl from '../styles/search.module.css'

import { Ivideos, IvideoItems} from '../interfaces/searchResult'
// import { JsonPlhdr } from '../interfaces/jsonPlaceHolder'

// api 'key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw'
// import {jsonVideosResult} from './youTubeApi'
// import { video } from './api/youTubeApi';

export default function Search() {
    const lastSearchResult = localStorage.getItem('name')

    
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 
    const [inputValue, setInputValue]= useState <string | undefined> (lastSearchResult??'как написать свой ютуб?') // инпут
    const [toggle,setToggle] = useState<boolean>(false) // костыль)) следит за нажатием кнопки поиска
    const [viev,setViev] = useState<boolean>(false) // для изменения списка с видео
    const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом
    

    const [maxResult,setMaxResult] = useState<number>(3)

    // ---LOCALSTORAGE
      if(localStorage.getItem('name') === ''){
        localStorage.removeItem('name')
      }
    const setLastSearchRequest =()=>{
        handToggle(setToggle,toggle)
        if(localStorage.length === 1){  //Поменять когда появится еще работа с LS 
          localStorage.clear()
        } 
        else if (localStorage.getItem('name') === ''){
          localStorage.removeItem('name')
        }
        return localStorage.setItem('name',(inputValue as string))        
    } 

    // ---LOCALSTORAGE

    // console.log(`${lastSearchResuly} - локалсторедж и ${inputValue}-инпутвалуе`);
    // const ref = useRef<any>(null)
    // const currentScrollHeight = ref.current.scrollHeight
    // console.log(`${ref.current.scrollHeight} - высота контейнера`)
    // console.log(`${window.pageYOffset} - мое местоположение`);

    const handToggle = (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable:boolean) =>{ // переключатель состояния
        setFn(!variable)
    }
    const videosToColumn =  'repeat(1,minmax(50px,1fr))'
    const videosToRow = 'repeat(3,minmax(100px,1fr))'
    const addMoreVideos =()=> {
      setMaxResult(maxResult + 9)
      handToggle(setToggle,toggle)
    }
        
    useEffect(() => {
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
      .then(res => {
        const video:Ivideos = res.data
        setVideos(video)
        // console.log(videos?.items)
  })  
},[toggle]) //костыль))


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

                <button onClick={()=> setLastSearchRequest() } className={cl.searchButton}>НАЙТИ</button>
                <button onClick={()=> setMaxResult(maxResult + 4 )} className={cl.addToFavorite}>+</button>
            </div>



        </div>

        <div className={cl.searchResult}>
          <p> Видео по запросу <strong>"{inputValue}"</strong> <span>{videos?.pageInfo.totalResults}</span></p>
          <div className={cl.changeVievIcons}>
            <button onClick={() => handToggle(setViev,viev)} className={cl.columnVideo}> { viev ? '+' : '-'} </button>
          </div>
        </div>

        {/* <iframe src="https://www.youtube.com/results?search_query=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8" frameBorder="0"></iframe> */}
      <div style={{gridTemplateColumns:`${ viev ? videosToColumn : videosToRow}`}} className={cl.iFrameYouTubeVideoWrapper} >
        {
         videos
        ? videos?.items.map( (item:IvideoItems) => 
            <div key={(item.id.videoId as string)}  className={cl.iFrameYouTubeVideo}>
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                {/* <p>{item.snippet.title}</p> */}
                <p>{item.snippet.channelTitle}</p>
            </div>
          )
        : <div>Ничего не найдено</div>
        }
        {/* <iframe src='https://www.youtube.com/watch?v=XXYlFuWEuKI' title='zxc' frameBorder="0"></iframe> */}
        {/* <iframe src="https://www.youtube.com/results?search_query=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8" title='f' frameBorder="2"></iframe> */}

      </div>
      <div>
      </div>

      <button onClick={()=> addMoreVideos()}> Показать еще</button>

        {/*  src={`https://www.youtube.com/watch?v=${item.id.videoId}`} фулскрин */}
      </section>
  )  
}
