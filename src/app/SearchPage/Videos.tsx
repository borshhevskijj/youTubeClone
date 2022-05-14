import React from 'react'
import {useDispatch} from 'react-redux'
import {addToFavorites} from '../../store/SearchSlice'
import cl from '../../styles/search.module.css'
import { IvideoItems } from '../../interfaces/searchResult'

export default function Videos(props:any) {
    const dispatch = useDispatch();
  return (
        <>
            {
            props.videos
            ? props.videos.items.map((item:IvideoItems) => 
                    <div key={item.id.videoId}  
                    className={cl.iFrameYouTubeVideo}>
                        <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                        <p>{item.snippet.channelTitle}</p>
                        <button 
                        onClick={()=> dispatch(addToFavorites(`https://www.youtube.com/embed/${item.id.videoId}`))} 
                        className={cl.addToFavorite}
                        >LIKE
                        </button>
                    </div>
                )
                : <div>Ничего не найдено</div>
            }
        </>
    )
}