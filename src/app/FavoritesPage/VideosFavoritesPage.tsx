import React, { useEffect, useState } from 'react'
import cl from '../../styles/favorites.module.scss'
import { IVideosFavoritesPage } from './../../interfaces/favoritesPageProps'


export default function VideosFavoritesPage({ favorites, DeleteVideo }: IVideosFavoritesPage) {

  const [isOneVideo, setIsOneVideo] = useState(true)


  useEffect(() => {

    const checkIsOneVideo = (array: Array<any>) => {
      if (array.length === 1) {
        return setIsOneVideo(true)
      }
      return setIsOneVideo(false)
    }
    checkIsOneVideo(favorites)
  }, [])




  return (
    <>
      {favorites.length
        ? favorites.map((favorite: string) =>
          <div
            style={{ marginBottom: '40px' }}
            key={favorite}
            className={cl.iFrameYouTubeVideo}>
            <iframe src={favorite} title='any' loading='lazy' frameBorder="0" allowFullScreen></iframe>
            <button style={{ marginTop: '20px' }} className={cl.btn} onClick={() => DeleteVideo(favorite)}>Удалить</button>
          </div>
        )
        : <div>В избранных нет видео</div>
      }
    </>
  )
}
