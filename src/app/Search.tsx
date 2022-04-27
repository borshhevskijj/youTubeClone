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
    const [inputValue, setInputValue]:[string, any] = useState('')

    // const videoIds = videos?.items.map((item:IvideoItems) => item.id.videoId )
    // const videoTitle = videos?.items.map((item:IvideoItems) => item.snippet.title)
    // const videoDescription = videos?.items.map((item:IvideoItems) => item.snippet.description)

    // useEffect(() => {
    //   axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=the%20weekend&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8')
    //   .then(res => {
    //     const video:Ivideos = res.data
    //     setVideos(video as Ivideos)
    //     console.log(video)
    //   })  
    // })

    // {{рабочая ссылка надо добавить !!ембед!!}}
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/3DrU3pFXSsY" frameBorder="0" allowFullScreen></iframe>

    // const filtredItems = () =>{
//   const filtred= videos.filter((video:any) => video.title.toLowerCase().includes(inputValue.toLowerCase()))
//    setVideos(filtred)
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

                <button onClick={()=> alert('hui')} className={cl.searchButton}>НАЙТИ</button>
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
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
         <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={cl.iFrameYouTubeVideo}>
              <iframe src="https://www.youtube.com/embed/3DrU3pFXSsY" title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>
      </div>
        */}

{/*   const videoIds = videos.items.map((item:IvideoItems) => item.id.videoId ) */}
                                                                          {/* видео айди  */}
                       {/*const videoIds = videos?.items.map((item:IvideoItems) => item.id.videoId )
 */}
 {/* {console.log(jsonVideosResult.items.map(item => item.id.videoId))} */}


      <div className={cl.iFrameYouTubeVideoWrapper} >
        { jsonVideosResult.items.map(item => 
            <div key={item.id.videoId} className={cl.iFrameYouTubeVideo}>
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                <p>{item.snippet.description}</p>
            </div>
          )}
      </div>

        
      </section>
  )  
}
