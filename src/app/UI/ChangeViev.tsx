import React,{useState,useEffect} from 'react'
import cl from '../../styles/search.module.css'
import { handToggle } from '../Search'

const videosToColumn ='repeat(1,minmax(50px,1fr))';
const videosToRow ='repeat(3,minmax(100px,1fr))';

export default function ChangeViev(props:any) {
    const [viev,setViev] = useState<boolean>(JSON.parse(localStorage.getItem(`${props.viev}`) as string) || false) // для изменения списка с видео

    useEffect(()=>{
      setViev(JSON.parse(localStorage.getItem(`${props.viev}`) as string))
    },[])
    useEffect(()=>{
      localStorage.setItem(`${props.viev}`,JSON.stringify(viev))
    },[viev])

  return (
<>
    <div className={cl.changeVievIcons}>
            <button onClick={() => handToggle(setViev,viev)} className={cl.columnVideo}> { viev ? '+' : '-'} </button>
    </div>

    <div style={{gridTemplateColumns:`${ viev ? videosToColumn : videosToRow}`}} className={cl.iFrameYouTubeVideoWrapper}>            
        {props.Component}
    </div>
</>
  )
}

// useEffect(()=>{
//   setViev(JSON.parse(localStorage.getItem('favoritesViev') as string))
// },[])
// useEffect(()=>{
//   localStorage.setItem('favoritesViev',JSON.stringify(viev))
// },[viev])