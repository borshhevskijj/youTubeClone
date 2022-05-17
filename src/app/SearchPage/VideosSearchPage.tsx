import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addToFavorites} from '../../store/SearchSlice'
import cl from '../../styles/search.module.css'
import { IvideoItems } from '../../interfaces/searchResult'
import { handToggle } from '../Search'

// const notFavorite = {
//     display: 'inlineBlock',
//     padding: '0.4em 1.4em',
//     textDecoration:' none',
//     color: '#67c5ff',
//     border: 'none',
//     borderRadius: '3px',
//     transition: '.4s',
//     backgroundColor: '#1390E5',
// }
// const alreadyFavorite = {
//     display: 'inlineBlock',
//     padding: '0.4em 1.4em',
//     textDecoration:' none',
//     color: '#000000',
//     border: 'none',
//     borderRadius: '3px',
//     transition: '.4s',
//     backgroundColor: '#10fc6f',
// }

export default function VideosSearchPage(props:any) {
const dispatch = useDispatch();
const [likedVideo,setLikedVideo]= useState<string[]>([]) 
const [toggle,setToggle]= useState(false)

    useEffect(() => {
    const likedVideos =():any=>{
    return props.videos?.items 
    .map((item:IvideoItems) => item.id.videoId)
    .filter((videoId:any)=> videoId !== undefined && `https://www.youtube.com/embed/${videoId}` ===  localStorage.getItem(`https://www.youtube.com/embed/${videoId}`))}

    return setLikedVideo(likedVideos)
 
    }, [toggle,setLikedVideo,props.videos])

  return (
        <>
        {/* <button className={cl.fav}>fav</button>
        <button className={cl.notFav}>notFav</button> */}
            {
            props.videos
            ? props.videos.items.map((item:IvideoItems) => 
                    <div key={item.id.videoId}  
                    className={cl.iFrameYouTubeVideo}>
                        <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                        <p>{item.snippet.channelTitle}</p>

                        <button 
                        // style={{marginTop:'15px'}}
                        onClick={
                            ()=> dispatch(addToFavorites(`https://www.youtube.com/embed/${item.id.videoId}`))
                            && handToggle(setToggle,toggle)
                        } 
                        className={
                        likedVideo?.includes(item.id.videoId)
                        ? cl.btn 
                        : cl.fav + ' ' + cl.btn
                        }
                        > {
                            likedVideo?.includes(item.id.videoId)
                            ? 'Уже в избранном'
                            : 'В избранное'
                            }
                        </button>
                    </div>
                )
                : <div>Ничего не найдено</div> // не работает
            }

        

        </>
    )
}