import React, {useState,useEffect} from 'react'
// import cl from '../styles/favorites.module.css'

import cl from '../styles/search.module.css'

export default function Favorites() {
  // console.log(Object.values(localStorage));
  // console.log(Object.keys(localStorage));
  const [favorites,setFavorites] = useState<string[]>([])
  // const favorites = Object.keys(localStorage)
  // .filter((favorite:string) =>  favorite  !== "lastSearchRequest" && favorite  !== "toggle" && favorite  !== "viev")
  // .map(favorite => localStorage.getItem(favorite))
// console.log(Object.keys(localStorage));


  useEffect(() => {
    const getFavorites = Object.keys(localStorage)
    .filter((favorite:string) =>  favorite  !== "lastSearchRequest" && favorite  !== "toggle" && favorite  !== "viev")
    // setFavorites(fav.map((favorite:string ) => localStorage.getItem(favorite)))
    .map(favorite => localStorage.getItem(favorite))
    setFavorites(getFavorites as string[])
  }, [])
  
  const lsKeys = Object.keys(localStorage).map(item=> item)
  
  // console.log(lsKeys);
  
  
  const lsValues = Object.values(localStorage).map(key => key)

  // console.log((favorites as string[]).map((fav:string) => fav))

  // useEffect(() => {

  // const  deleteVideo = (favorite:string)=> {
  //   (favorites as string[]).map(fav => lsKeys.includes(fav))
  //   ?localStorage.removeItem(favorite)
  //   :alert('зззз')
  // }   
  // }, [favorites])



// и убрать из ЛС!
  const DeleteVideo =(favorite:string)=>{
    // lsKeys.includes(favorite)
     setFavorites(favorites.filter(fav => !favorite.includes(fav)))
  }

//   console.log(lsKeys);
  
// console.log(favorites);

const clear =() =>  localStorage.clear()

  return (
    <section className={cl.iFrameYouTubeVideo}>
      <button style={{padding:'5px 30px'}} onClick={()=>clear()}>Удалить все видео</button>
      { 
      favorites 
          ?favorites.map((favorite:string) => 
          <div
          style={{marginBottom:'40px'}}
          key={favorite}
          className={cl.iFrameYouTubeVideo}>
          <iframe src={favorite as string} title='any' frameBorder="0" allowFullScreen></iframe>
          
          {/* <button style={{padding:'5px 30px'}} onClick={()=>deleteVideo(favorite)}>Удалить</button> */}
          <button style={{padding:'5px 30px'}} onClick={()=> DeleteVideo(favorite)}>Удалить</button>

          </div>)
          : <div>В избранных нет видео</div>
        }
      </section>
  )
}
