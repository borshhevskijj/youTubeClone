import React, { useState, useEffect } from 'react'
import cl from '../../styles/favorites.module.scss'
import { handToggle } from '../Search'
import List from '../svg/List'
import Grid from '../svg/Grid'

const [videosListCol, videosGridCol] = ['1fr', 'repeat(auto-fit,minmax(300px, 1fr))'] //gridTemplateColumns
const [videosListRow, videosGridRow] = ['600px', 'minmax(180px,230px)'] //gridAutoRows


export default function ChangeViev(props: any) {
  const [viev, setViev] = useState<boolean>(JSON.parse(localStorage.getItem(`${props.viev}`) as string) || false)





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


