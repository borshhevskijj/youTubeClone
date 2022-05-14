import React,{useState,useEffect} from 'react'
import cl from '../../styles/search.module.css'
import { handToggle } from '../Search'
// import content from './../svg/grid.svg'
import List from '../svg/List'
import Grid from '../svg/Grid'

const videosList ='repeat(1,minmax(auto-fit,1fr))';
const videosGrid ='repeat(auto-fit ,minmax(200px,1fr))';
	
// grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
export default function ChangeViev(props:any) {
    const [viev,setViev] = useState<boolean>(JSON.parse(localStorage.getItem(`${props.viev}`) as string) || false) // для изменения списка с видео

    useEffect(()=>{
      setViev(JSON.parse(localStorage.getItem(`${props.viev}`) as string))
    },[])
    useEffect(()=>{
      localStorage.setItem(`${props.viev}`,JSON.stringify(viev))
    },[viev])

  return (

  <div style={{textAlign:'right',paddingTop:'1em'}}>
    <div className={props.className}>
            <button onClick={() => handToggle(setViev,viev)}>
              { viev ? <List/> :<Grid/>}
            </button>
    </div>

    <div style={{gridTemplateColumns:`${ viev ? videosList : videosGrid}`}} className={cl.iFrameYouTubeVideoWrapper}>            
        {props.Component}
    </div>
</div>
  )
}

// useEffect(()=>{
//   setViev(JSON.parse(localStorage.getItem('favoritesViev') as string))
// },[])
// useEffect(()=>{
//   localStorage.setItem('favoritesViev',JSON.stringify(viev))
// },[viev])