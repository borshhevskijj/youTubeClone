import React,{useEffect,useState} from 'react'
import cl from '../../styles/search.module.css'
import axios from "axios";
import { Ivideos } from '../../interfaces/searchResult';

import VideosSearchPage from './VideosSearchPage';
// import { handToggle } from '../Search'
import ChangeViev from '../UI/ChangeViev';


export default function SearchPage(props:any) {
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 
    const [maxResult,setMaxResult]=useState(6)  
    // const [viev,setViev] = useState<boolean>(JSON.parse(localStorage.getItem('searchViev') as string) || false) // для изменения списка с видео
    
    

    // useEffect(()=>{
    //   setViev(JSON.parse(localStorage.getItem('searchViev') as string))
    // },[])
    // useEffect(()=>{
    //   localStorage.setItem('searchViev',JSON.stringify(viev))
    // },[viev])


    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${props.inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
        .then((res:any) => {
          const video:Ivideos = res.data;
          setVideos(video)
          console.log('обновляется')
        })  
        .then(res => {console.log(`данные получены`)})
    },[props.toggle]) 
    
// localStorage.clear()
  return (
    <div className={cl.videosWrapper}>
      <div className={cl.searchResult}>
          <p> Видео по запросу <strong>`{props.debouncedInput}`</strong> <span>{videos?.pageInfo.totalResults}</span></p>
              <ChangeViev 
              viev={'searchViev'}
              className={cl.changeVievIcons}
              Component={<VideosSearchPage videos={videos}/>
              }/>
      </div>
    </div>
  )
}
