import React, {useState} from 'react'
// import cl from '../styles/favorites.module.css'

//  console.log(Object.values(localStorage));
//  console.log(Object.keys(localStorage));
import cl from '../styles/search.module.css'

export default function Favorites() {
   const filtredFavorites = Object.keys(localStorage).filter(item => item !== "lastSearchRequest")

  
  // const deleteFavorite =(item:string)=> localStorage.removeItem(item)

  // localStorage.removeItem('favoritesqwwer')
  //  const favorites = Object.values(localStorage)
    // localStorage.clear()
  return (
    <section className={cl.iFrameYouTubeVideo}>
      { 
      filtredFavorites
          ?filtredFavorites.map(item => localStorage.getItem(item)).map(favorite => 
          <div
          key={favorite}
          className={cl.iFrameYouTubeVideo}>
                  <iframe src={favorite as string} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
          </div>)
          : <div>В избранных нет видео</div>
        }
      </section>
  )
}
