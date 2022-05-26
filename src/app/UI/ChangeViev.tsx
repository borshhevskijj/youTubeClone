import React, { useState, useEffect } from 'react'
// import cl from 'C:/you-tube-react-redux-ts/src/styles/navBar.module.scss'
import cl from '../../styles/favorites.module.scss'
import { handToggle } from '../Search'
// import content from './../svg/grid.svg'
import List from '../svg/List'
import Grid from '../svg/Grid'

const [videosListCol, videosGridCol] = ['repeat(1,minmax(300px,1fr))', 'repeat(auto-fit,minmax(245px,1fr))'] //ширину
const [videosListRow, videosGridRow] = ['minmax(550px,250px)', 'minmax(250px,250px)'] //высоту

// grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
export default function ChangeViev(props: any) {
  const [viev, setViev] = useState<boolean>(JSON.parse(localStorage.getItem(`${props.viev}`) as string) || false) // для изменения списка с видео

  useEffect(() => {
    setViev(JSON.parse(localStorage.getItem(`${props.viev}`) as string))
  }, [])
  useEffect(() => {
    localStorage.setItem(`${props.viev}`, JSON.stringify(viev))
  }, [viev])

  return (

    <div style={{ textAlign: 'right', paddingTop: '1em' }}>
      <div className={props.className}>
        <button onClick={() => handToggle(setViev, viev)}>
          {viev ? <List /> : <Grid />}
        </button>
      </div>

      <div
        className={cl.iFrameYouTubeVideoWrapper}
        style={{
          textAlign: 'left',
          gridTemplateColumns: `${viev ? videosListCol : videosGridCol}`,
          gridAutoRows: `${viev ? videosListRow : videosGridRow}`
        }}
      >
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