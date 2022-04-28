import React from 'react'
import axios from "axios";
import { useState, useEffect} from 'react'
import cl from '../styles/search.module.css'

import { IvideoItems,Ivideos } from '../interfaces/searchResult'
// import { JsonPlhdr } from '../interfaces/jsonPlaceHolder'

// api 'key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw'
import {jsonVideosResult} from './youTubeApi'
// import { video } from './api/youTubeApi';

export default function Search() {
    const [videos, setVideos]:[any | undefined, any] = useState()
    const [inputValue, setInputValue]:[string, any] = useState('котики и собачки')
    const [toggle,setToggle] = useState(false)
    
    const inputValueToUrl = inputValue.replace(/ /gim,'%20')
    

    // const videoIds = videos?.items.map((item:IvideoItems) => item.id.videoId )
    // const videoTitle = videos?.items.map((item:IvideoItems) => item.snippet.title)
    // const videoDescription = videos?.items.map((item:IvideoItems) => item.snippet.description)
    const getVideos = ()=>{
        setToggle(!toggle)
        console.log(toggle);
        
    }

useEffect(() => {
  axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
  .then(res => {
    const video:Ivideos = res.data
    setVideos(video as Ivideos)
  })  
},[toggle])

    // const getVideos = async ()=>{
    //     axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${inputValueToUrl()}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
    //       .then(res => {
    //         const video:Ivideos = res.data
    //         setVideos(video as Ivideos)
    //       })
    // }


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

                <button onClick={()=> getVideos()} className={cl.searchButton}>НАЙТИ</button>
                <button onClick={()=> alert('clicked +')} className={cl.addToFavorite}>+</button>
            </div>



        </div>

        <div className={cl.searchResult}>
          <p>Видео по запросу <strong>"{inputValue}"</strong></p>
          
          <div className={cl.changeVievIcons}>
            <button>+</button>
            <button>-</button>
          </div>
        </div>

        {/* <iframe src="https://www.youtube.com/results?search_query=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8" frameBorder="0"></iframe> */}
      
      {/* <div className={cl.iFrameYouTubeVideoWrapper}>
         <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>

        */}

{/*   const videoIds = videos.items.map((item:IvideoItems) => item.id.videoId ) */}
                                                                          {/* видео айди  */}
                       {/*const videoIds = videos?.items.map((item:IvideoItems) => item.id.videoId )
 */}
 {/* {console.log(jsonVideosResult.items.map(item => item.id.videoId))} */}


      <div className={cl.iFrameYouTubeVideoWrapper} >
        {
        !inputValue
        ? videos?.items.map( (item:any) => 
            <div key={item.id.videoId}  className={cl.iFrameYouTubeVideo}>
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                <p>{item.snippet.description}</p>
            </div>
          )
        : <div style={{textAlign:'center'}}>Ничего не найдено</div>
        }
      </div>

        {/*  src={`https://www.youtube.com/watch?v=${item.id.videoId}`} фулскрин */}
      </section>
  )  
}
