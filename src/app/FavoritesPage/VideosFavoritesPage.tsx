import React from 'react'
import cl from '../../styles/favorites.module.css'


//  <button className={cl.deleteBtn} style={{padding:'5px 30px'}}>Удалить</button>

export default function VideosFavoritesPage(props:any) {
  return (
    <>
        {props.favorites
     ? props.favorites.map((favorite:string) => 
     <div
     style={{marginBottom:'40px'}}
     key={favorite}
     className={cl.iFrameYouTubeVideo}>
            <iframe src={favorite} title='any' frameBorder="0" allowFullScreen></iframe>
            <button className={cl.btn} onClick={()=> props.DeleteVideo(favorite)}>Удалить</button>
          </div>
          )
          : <div>В избранных нет видео</div> // не работаeт}
          
        }   
    </>
    
  )
}
