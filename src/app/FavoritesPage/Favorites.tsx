import React, {useState,useEffect} from 'react'
// import cl from '../styles/favorites.module.css'
import cl from '../../styles/favorites.module.scss'
import ChangeViev from './../UI/ChangeViev';
import VideosFavoritesPage from './VideosFavoritesPage';

export default function Favorites() {
  const [favorites,setFavorites] = useState<string[]>([]) //лайкнутые видео
  
  useEffect(() => {
    const getFavorites = Object.keys(localStorage)
    .filter((favorite:string) => favorite !== undefined && favorite  !== "lastSearchRequest" && favorite  !== "toggle" && favorite  !== "favoritesViev" && favorite  !== "searchViev" && favorite !== "isLoaded" && favorite !== "responseData")
    .map(favorite => localStorage.getItem(favorite))
    setFavorites(getFavorites as string [])
  }, [])
  
  const DeleteVideo =(favorite:string)=> {
     setFavorites(favorites.filter((video:string) => !favorite.includes(video)))
     localStorage.removeItem(favorite)
  }
  return (
    <section className={cl.iFrameYouTubeVideoWrapper}>
      <ChangeViev
        viev={'favoritesViev'} 
        className={cl.changeVievIcons}
        Component={ 
          <VideosFavoritesPage 
          DeleteVideo={DeleteVideo} 
          favorites={favorites}/>
      }/>
      </section>
  )
}

