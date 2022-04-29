import React from 'react'
import axios from "axios";
import { useState, useEffect} from 'react'
import cl from '../styles/search.module.css'

import { Ivideos } from '../interfaces/searchResult'
// import { JsonPlhdr } from '../interfaces/jsonPlaceHolder'

// api 'key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw'
// import {jsonVideosResult} from './youTubeApi'
// import { video } from './api/youTubeApi';

export default function Search() {
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 
    const [inputValue, setInputValue]= useState <string | undefined> ('котики и собачки') // инпут
    
    const [toggle,setToggle] = useState<boolean>(false) // костыль)) следит за нажатием кнопки поиска
    const [viev,setViev] = useState<boolean>(false) // для изменения списка с видео
    const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом
    
    useEffect(() => {
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
      .then(res => {
        const video:Ivideos = res.data
        setVideos(video as Ivideos)
        console.log(videos?.items)
  })  
},[toggle]) //костыль))

    const handToggle = (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable:boolean) =>{
        setFn(!variable)
    }
const videosToColumn =  'repeat(1,minmax(50px,1fr))'
const videosToRow = 'repeat(3,minmax(100px,1fr))'

    return (
    <section className={cl.wrapper}>
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
            {/* <button onClick={()=>videosToRow()} className={cl.rowVideo}>Строка</button> */}
          </div>
        </div>

        {/* <iframe src="https://www.youtube.com/results?search_query=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8" frameBorder="0"></iframe> */}
      <div style={{gridTemplateColumns:`${ viev ? videosToColumn : videosToRow}`}} className={cl.iFrameYouTubeVideoWrapper} >
        {
         videos
        ? videos?.items.map( (item:any) => 
            <div key={item.id.videoId}  className={cl.iFrameYouTubeVideo}>
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                <p>{item.snippet.title}</p>
            </div>
          )
        : <div style={{textAlign:'center'}}>Ничего не найдено</div>
        }
      </div>

        {/*  src={`https://www.youtube.com/watch?v=${item.id.videoId}`} фулскрин */}
      </section>
  )  
}
