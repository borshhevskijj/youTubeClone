
import React, { useEffect, useState } from 'react'
import cl from '../../styles/search.module.scss'
import axios from "axios";
import { IvideoItems, Ivideos } from '../../interfaces/searchResult';
import VideosSearchPage from './VideosSearchPage';
import ChangeViev from '../UI/ChangeViev';
import { IsearchPageProps } from './../../interfaces/searchPageProps'
import { useSelector } from 'react-redux';

// 
export const SearchPage: React.FC<IsearchPageProps> = ({
  isLoaded,
  setIsLoaded,
  toggle,
  debouncedInput,
  inputValueToUrl,
}) => {



  const [videos, setVideos] = useState<Ivideos | undefined>()
  const videoSliceLength = useSelector((state: any) => state.videoSliceLength.videosSliceLength)


  const youTubeAPIurl = (pageToken = '') => {
    // &pageToken=
    if (pageToken) {
      return (
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&pageToken=${pageToken}&type=video&videoSyndicated=true&videoEmbeddable=true&videoLicense=youtube&maxResults=50&q=${inputValueToUrl || 'memes'}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`
      )
    }
    return (
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoSyndicated=true&videoEmbeddable=true&videoLicense=youtube&maxResults=50&q=${inputValueToUrl || 'memes'}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`
    )
  }



  // const youTubeAPIurl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoSyndicated=true&videoEmbeddable=true&videoLicense=youtube&maxResults=50&q=${inputValueToUrl || 'memes'}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`

  //#region Get request 
  useEffect(() => {
    if (isLoaded === true) {
      axios.get(youTubeAPIurl())
        .then((res: any) => {
          setIsLoaded(false)
          const video: Ivideos = res.data;
          setNextPageToken(video.nextPageToken)
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
      setNextPageToken(localStarageResponseData.nextPageToken)
      console.log(`обновляется 2`)
    }

    else if (isLoaded === false && Object.keys(localStorage).includes('responseData') === false) {

      axios.get(youTubeAPIurl())
        .then((res: any) => {
          setVideos(res.data)
          setNextPageToken(res.data.nextPageToken)

          console.log(`обновляется 3`)
        })
        .catch((error) => {
          console.log(error);
          alert(`что-то пошло не так, ошибка - '${error}'`)
        })

    }
  }, [toggle])

  //#endregion

  // -----


  const [nextPageToken, setNextPageToken] = useState<string | undefined>()



  console.log(videoSliceLength === videos?.items.length);
  console.log(videoSliceLength);
  console.log(videos?.items.length);


  // localStorage.clear()



  useEffect(() => {
    if (videoSliceLength === videos?.items.length) {
      axios.get(youTubeAPIurl(nextPageToken))
        .then((res: any) => {
          setIsLoaded(false)
          const video: any = res.data;
          video.items = [...videos?.items as any, ...video.items]

          setVideos(video)
          setNextPageToken(video.nextPageToken)
          localStorage.setItem('responseData', JSON.stringify(video))


          // localStorage.setItem('responseData', JSON.stringify(res.data))
          console.log(`обновляется 4`)

        })
        .catch((error) => {
          console.log(error);
          alert(`что-то пошло не так, ошибка - '${error}'`)
        })
    }
  }, [videoSliceLength])
  // -----



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
              : <div> идет загрузка... </div>
          } />
        {/* {videoSliceLength === videos?.items.length */}


        {!isLoaded
          ? <div style={{ display: 'grid', placeContent: 'center', marginTop: 120 }}>
            <span>
              загрузка...
            </span>
          </div>
          : false
        }
      </div>
    </div>
  )
}

export default SearchPage
