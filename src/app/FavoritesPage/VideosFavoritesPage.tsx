import React from 'react'
import cl from '../../styles/favorites.module.scss'
import { IvideoItems } from '../../interfaces/searchResult'

export default function VideosFavoritesPage(props: any) {
  const favorites: IvideoItems['id']['videoId'][] = props.favorites || []
  return (
    <>
      {favorites.length
        ? favorites.map((favorite: string) =>
          <div
            style={{ marginBottom: '40px' }}
            key={favorite}
            className={cl.iFrameYouTubeVideo}>
            <iframe src={favorite} title='any' frameBorder="0" allowFullScreen></iframe>
            <button style={{ marginTop: '20px' }} className={cl.btn} onClick={() => props.DeleteVideo(favorite)}>Удалить</button>
          </div>
        )
        : <div>В избранных нет видео</div>
      }
    </>
  )
}
