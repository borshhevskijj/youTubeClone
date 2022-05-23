
import React,{ useEffect,useState,useCallback} from 'react'
import cl from '../../styles/search.module.scss'
import axios from "axios";
import { Ivideos } from '../../interfaces/searchResult';
import VideosSearchPage from './VideosSearchPage';
import ChangeViev from '../UI/ChangeViev';

// const axiosGetVideos= async (inputValue='') => {
//    axios.get
//   (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputValue}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
// }
//   useEffect(() => {
//       axiosGetVideos(props.inputValueToUrl || '')
//         .then((res:any) => {
//           const video:Ivideos =  res.data || [];
//           setVideos(video)
//           console.log('обновляется')
//         })  
//     },[props.toggle]) 

 const SearchPage = (props:any) => {
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 

    // const [isLoaded,setIsLoaded]= useState(false) это состояние в другом модуле
    // onClick(()=> setIsLoaded(true) ) на кнопке  в другом модуле

    useEffect(() => {
      if(props.isLoaded === true){
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${props.inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
          .then((res:any) => {
            props.setIsLoaded(false)
            const video:Ivideos = res.data;
            setVideos(video)
            localStorage.setItem('responseData',JSON.stringify(res.data))
            console.log(`обновляется `)
          })}
           else if(props.isLoaded === false)
            { 
            setVideos(JSON.parse(localStorage.getItem('responseData') as any))
            console.log(`не обновляется `)
          }
        },[props.toggle])

        // в блоке елсе можно отправлять запрос на популярные видосы
        // https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=[YOUR_API_KEY] попробовать

  //  useEffect(() => {
  //     axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${props.inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
  //       .then((res:any) => {
  //         const video:Ivideos = res.data;
  //         setVideos(video)
  //         console.log('обновляется')
  //       })  
  //     },[props.toggle]) 
        
  return (
    <div className={cl.videosWrapper}>
      <div className={cl.searchResult}>
          <p> Видео по запросу <strong>`{props.debouncedInput}`</strong> <span>{videos?.pageInfo.totalResults}</span></p>
              <ChangeViev 
              viev={'searchViev'}
              className={cl.changeVievIcons}
              Component={
                <VideosSearchPage videos={videos}/>
              }/>
              {/* !isLoaded
              ?<div>идет загрузка...</div> */}
      </div>
    </div>
  )
}

















export default SearchPage
