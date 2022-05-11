import React, {useState,useEffect} from 'react'
// import cl from '../styles/favorites.module.css'
import cl from '../styles/search.module.css'


// localStorage.clear()

export default function Favorites() {
  const [favorites,setFavorites] = useState<string[]>([]) //лайкнутые видео
  console.log(favorites);
  
  useEffect(() => {
    const getFavorites = Object.keys(localStorage)
    .filter((favorite:string) =>  favorite  !== "lastSearchRequest" && favorite  !== "toggle" && favorite  !== "viev")
    .map(favorite => localStorage.getItem(favorite))
      setFavorites(getFavorites as string[])
  }, [])
  
  const DeleteVideo =(favorite:string)=>{
     setFavorites(favorites.filter((fav:string) => !favorite.includes(fav)))
     localStorage.removeItem(favorite)
  }
  return (
    <section className={cl.iFrameYouTubeVideo}>
      { 
      favorites
         ? favorites.map((favorite:string) => 
         <>
              <div
              style={{marginBottom:'40px'}}
              key={favorite}
              className={cl.iFrameYouTubeVideo}>
              <iframe src={favorite} title='any' frameBorder="0" allowFullScreen></iframe>
              <button style={{padding:'5px 30px'}} onClick={()=> DeleteVideo(favorite)}>Удалить</button>
              </div>
         </>
              )
          : <div>В избранных нет видео</div> // не работаeт
        }
      </section>
  )
}
