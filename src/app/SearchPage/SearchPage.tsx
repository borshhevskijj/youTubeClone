
import React, { useEffect, useState } from 'react'
import cl from '../../styles/search.module.scss'
import axios from "axios";
import { Ivideos } from '../../interfaces/searchResult';
import VideosSearchPage from './VideosSearchPage';
import ChangeViev from '../UI/ChangeViev';


const SearchPage = (props: any) => {
  const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 

  useEffect(() => {
    if (props.isLoaded === true) {
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
        .then((res: any) => {
          props.setIsLoaded(false)
          const video: Ivideos = res.data;
          setVideos(video)
          localStorage.setItem('responseData', JSON.stringify(res.data))
          console.log(`обновляется`)
        })
    }
    else if (props.isLoaded === false && Object.keys(localStorage).includes('responseData')) {
      setVideos(JSON.parse(localStorage.getItem('responseData') as any))
    }
    else if (props.isLoaded === false && Object.keys(localStorage).includes('responseData') === false) {
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=популярное&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
        .then((res: any) => {
          setVideos(res.data)
        })
    }
  }, [props.toggle])
  return (
    <div className={cl.videosWrapper}>
      <div className={cl.searchResult}>
        <p> Видео по запросу <strong>`{props.debouncedInput}`</strong> <span>{videos?.pageInfo.totalResults}</span></p>
        <ChangeViev
          viev={'searchViev'}
          className={cl.changeVievIcons}
          Component={

            !props.isLoaded
              ? <VideosSearchPage videos={videos} />
              : <div>идет загрузка...</div>
          } />
      </div>
    </div>
  )
}

















export default SearchPage
