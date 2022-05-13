import React from 'react'
import cl from '../../styles/favorites.module.css'


export default function VideosFavoritesPage(props:any) {
  return (
    <div>
        {props.favorites
     ? props.favorites.map((favorite:string) => 
          <div
            style={{marginBottom:'40px'}}
            key={favorite}
            className={cl.iFrameYouTubeVideo}>
            <iframe src={favorite} title='any' frameBorder="0" allowFullScreen></iframe>
            <button style={{padding:'5px 30px'}} onClick={()=> props.DeleteVideo(favorite)}>Удалить</button>
          </div>
          )
      : <div>В избранных нет видео</div> // не работаeт}
        }   
    </div>
  )
}
