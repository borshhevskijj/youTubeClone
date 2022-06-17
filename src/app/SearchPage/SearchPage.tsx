
import React, { useEffect, useState } from 'react'
import cl from '../../styles/search.module.scss'
import axios from "axios";
import { IvideoItems, Ivideos } from '../../interfaces/searchResult';
import VideosSearchPage from './VideosSearchPage';
import ChangeViev from '../UI/ChangeViev';
import { IsearchPageProps } from './../../interfaces/searchPageProps'


export const SearchPage: React.FC<IsearchPageProps> = ({
  isLoaded,
  setIsLoaded,
  toggle,
  debouncedInput,
  inputValueToUrl,
}) => {

  const [videos, setVideos] = useState<Ivideos | undefined>() // 
  const youTubeAPIurl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoSyndicated=true&videoEmbeddable=true&videoLicense=youtube&maxResults=50&q=${inputValueToUrl || 'memes'}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`

  useEffect(() => {
    if (isLoaded === true) {
      axios.get(youTubeAPIurl)
        .then((res: any) => {
          setIsLoaded(false)
          const video: Ivideos = res.data;
          setVideos(video)
          localStorage.setItem('responseData', JSON.stringify(res.data))
          console.log(`обновляется 1`)

        })
        .catch((error) => {
          console.log(error);
          alert(`что-то пошло не так, ошибка - '${error}'`)
        })
    }

    else if (isLoaded === false && Object.keys(localStorage).includes('responseData')) {
      const localStarageResponseData = JSON.parse(localStorage.getItem('responseData')!)
      setVideos(localStarageResponseData)
      console.log(`обновляется 2`)
    }

    else if (isLoaded === false && Object.keys(localStorage).includes('responseData') === false) {
      axios.get(youTubeAPIurl)
        .then((res: any) => {
          setVideos(res.data)
          console.log(`обновляется 3`)
        })
        .catch((error) => {
          console.log(error);
          alert(`что-то пошло не так, ошибка - '${error}'`)
        })
    }
  }, [toggle])


  return (
    <div className={cl.videosWrapper}>
      <div className={cl.searchResult}>
        <p> Видео по запросу <strong>` {debouncedInput} `</strong> <span>{videos?.pageInfo.totalResults}</span></p>
        <ChangeViev
          viev={'searchViev'}
          className={cl.changeVievIcons}
          Component={
            !isLoaded
              ? <VideosSearchPage videos={videos!} />
              : <div>идет загрузка...</div>
          } />
      </div>
    </div>
  )
}

export default SearchPage
