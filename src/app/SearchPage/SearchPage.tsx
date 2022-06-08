
import React, { useEffect, useState } from 'react'
import cl from '../../styles/search.module.scss'
import axios from "axios";
import { IvideoItems, Ivideos } from '../../interfaces/searchResult';
import VideosSearchPage from './VideosSearchPage';
import ChangeViev from '../UI/ChangeViev';
import { IsearchPageProps } from './../../interfaces/searchPageProps'
// import { jsonVideosResult } from './../youTubeApi' //удал


export const SearchPage: React.FC<IsearchPageProps> = ({
  isLoaded,
  setIsLoaded,
  toggle,
  debouncedInput,
  inputValueToUrl,
}) => {

  const [videos, setVideos] = useState<Ivideos | undefined>() // 
  // console.log(videos?.items.length);

  // const [pageToken, setPageToken] = useState<string | undefined>()

  // if (pageToken !== undefined) {
  //   console.log(pageToken);
  // }

  // if (isLoaded === true) {
  //   axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
  //     .then((res: any) => {
  //       setIsLoaded(false)
  //       const video: Ivideos = res.data;
  //       setVideos(video)
  //       // setPageToken(video?.nextPageToken)
  //       localStorage.setItem('responseData', JSON.stringify(res.data))
  //       console.log(`обновляется 1`)

  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       alert(`что-то пошло не так, ошибка ${e}`)
  //     })
  //   //тут
  // }
  const youTubeAPIurl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoSyndicated=true&videoEmbeddable=true&videoLicense=youtube&maxResults=50&q=${inputValueToUrl || 'memes'}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`

  useEffect(() => {
    if (isLoaded === true) {
      axios.get(youTubeAPIurl)
        .then((res: any) => {
          setIsLoaded(false)
          const video: Ivideos = res.data;
          setVideos(video)
          // setPageToken(video?.nextPageToken)
          localStorage.setItem('responseData', JSON.stringify(res.data))
          console.log(`обновляется 1`)

        })
        .catch((error) => {
          console.log(error);
          alert(`что-то пошло не так, ошибка - '${error}'`)
        })
      //тут
    }

    else if (isLoaded === false && Object.keys(localStorage).includes('responseData')) {
      const localStarageResponseData = JSON.parse(localStorage.getItem('responseData')!)
      setVideos(localStarageResponseData)
      // setPageToken(localStarageResponseData.nextPageToken)
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



  // const [sliceLength, setSliceLength] = useState<number>()


  // useEffect(() => {
  //   const videosSliceLength = JSON.parse(localStorage.getItem('videosSliceLength')!)
  //   setSliceLength(videosSliceLength)
  // }, [])

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
