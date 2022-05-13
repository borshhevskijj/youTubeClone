import React,{useEffect,useState} from 'react'
import cl from '../../styles/search.module.css'
import axios from "axios";
import { Ivideos } from '../../interfaces/searchResult';
import Videos from './Videos'
// import { handToggle } from '../Search'
import { handToggle } from '../Search';
import ChangeViev from '../UI/ChangeViev';
// const videosToColumn ='repeat(1,minmax(50px,1fr))';
// const videosToRow ='repeat(3,minmax(100px,1fr))';


export default function SearchPage(props:any) {
    const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео 
    const [maxResult,setMaxResult]=useState(5)  
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
          
          {/* <div className={cl.changeVievIcons}>
            <button onClick={() => handToggle(setViev,viev)} className={cl.columnVideo}> { viev ? '+' : '-'} </button>
          </div> */}
              <ChangeViev 
              viev={'searchViev'}
              Component={<Videos videos={videos}/>
              }/>


      </div>
      {/* <div style={{gridTemplateColumns:`${ viev ? videosToColumn : videosToRow}`}} className={cl.iFrameYouTubeVideoWrapper}>            
            <Videos videos={videos}/>
      </div> */}
    </div>
  )
}
