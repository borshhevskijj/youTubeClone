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
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 
    const [inputValue, setInputValue]= useState <string | undefined> ('наруто ураганные хроники') // инпут
    const [toggle,setToggle] = useState<boolean>(false) // костыль)) следит за нажатием кнопки поиска
    const [viev,setViev] = useState<boolean>(false) // для изменения списка с видео
    const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом
    
    const [maxResult,setMaxResult] = useState<Number>(8)
    
    const ref = useRef<any>(null)

    // setInterval(()=>{
    //   console.log(`${ref.current.scrollHeight} - высота контейнера`)
    // console.log(`${window.scrollY} - мое местоположение`);
    // },2000)
    // clearInterval()
    
    // console.log(`${ref.current.scrollHeight} - высота контейнера`)
    // console.log(`${window.scrollHeight} - мое местоположение`);

    const handToggle = (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable:boolean) =>{ // переключатель состояния
        setFn(!variable)
    }
    const videosToColumn =  'repeat(1,minmax(50px,1fr))'
    const videosToRow = 'repeat(3,minmax(100px,1fr))'
    const number = 5
    const addMoreVideos =()=> setMaxResult(number)
    
    //if scroll section === window.scrollY - 300 {...logic...}
    
    useEffect(() => {
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
      .then(res => {
        const video:Ivideos = res.data
        setVideos(video)
        // console.log(videos?.items)
  })  
},[toggle]) //костыль))


const currentHeight =()=>{
 if(ref.current.scrollHeight - ref.current.scrollTop === ref.current.clientHeight){
   alert('вы внизу')
 }
 alert(`вы находитесь тут - ${ref.current.scrollHeight}`)
}
currentHeight()
    return (
    <section ref={ref} className={cl.wrapper}>
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

                <button onClick={()=> handToggle(setToggle,toggle)} className={cl.searchButton}>НАЙТИ</button>
                <button onClick={()=> alert('clicked +')} className={cl.addToFavorite}>+</button>
            </div>



        </div>

        <div className={cl.searchResult}>
          <p>Видео по запросу <strong>"{inputValue}"</strong></p>
          
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
                <p>{item.snippet.title}</p>
            </div>
          )
        : <div>Ничего не найдено</div>
        }
      </div>
      <button onClick={()=> addMoreVideos()}>Показать еще</button>

        {/*  src={`https://www.youtube.com/watch?v=${item.id.videoId}`} фулскрин */}
      </section>
  )  
}
