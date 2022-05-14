import React, {useState,useEffect} from 'react'
// import cl from '../styles/favorites.module.css'
import cl from '../../styles/favorites.module.css'
// import ChangeViev from '../UI/ChangeViev'
// ChangeViev
// import SearchPage from '../SearchPage/SearchPage';
import ChangeViev from './../UI/ChangeViev';
import VideosFavoritesPage from './VideosFavoritesPage';

// localStorage.clear()



export default function Favorites() {
  const [favorites,setFavorites] = useState<string[]>([]) //лайкнутые видео


 

  useEffect(() => {
    const getFavorites = Object.keys(localStorage)
    .filter((favorite:string) =>  favorite  !== "lastSearchRequest" && favorite  !== "toggle" && favorite  !== "favoritesViev" &&
     favorite  !== "searchViev")
    .map(favorite => localStorage.getItem(favorite))
      setFavorites(getFavorites as string[])
  }, [])
  
  const DeleteVideo =(favorite:string)=>{
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

// favorites
//    ? favorites.map((favorite:string) => 
//         <div
//           style={{marginBottom:'40px'}}
//           key={favorite}
//           className={cl.iFrameYouTubeVideo}>
//           <iframe src={favorite} title='any' frameBorder="0" allowFullScreen></iframe>
//           <button style={{padding:'5px 30px'}} onClick={()=> DeleteVideo(favorite)}>Удалить</button>
//         </div>
//         )
//     : <div>В избранных нет видео</div> // не работаeт