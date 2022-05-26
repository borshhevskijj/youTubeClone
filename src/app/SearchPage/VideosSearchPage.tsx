import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../store/SearchSlice'
import cl from '../../styles/search.module.scss'
import { IvideoItems } from '../../interfaces/searchResult'
import { handToggle } from '../Search'
import Like from '../svg/Like'


export default function VideosSearchPage(props: any) {
    const dispatch = useDispatch();
    const [likedVideo, setLikedVideo] = useState<string[]>([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const likedVideos = () => {
            return props.videos?.items
                .map((item: IvideoItems) => item.id.videoId)
                .filter((videoId: any) => videoId !== undefined && `https://www.youtube.com/embed/${videoId}` === localStorage.getItem(`https://www.youtube.com/embed/${videoId}`))
        }
        setLikedVideo(likedVideos)

    }, [toggle, setLikedVideo, props.videos])

    return (
        <>
            {
                props.videos
                    ? props.videos.items.map((item: IvideoItems) =>
                        // <div key={item.id.videoId}  
                        <div key={item.id.videoId}
                            className={cl.iFrameYouTubeVideo}>
                            <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.snippet.title} frameBorder="0" allowFullScreen></iframe>

                            <div className={cl.infoWrapper}>
                                <div className={cl.info}>
                                    <p style={{ color: 'black' }}>{item.snippet.title.replace(/&#39;/, "'")}</p>
                                    <p >{item.snippet.channelTitle}</p>
                                </div>

                                <button
                                    onClick={
                                        () => dispatch(addToFavorites(`https://www.youtube.com/embed/${item.id.videoId}`))
                                            && handToggle(setToggle, toggle)
                                    }
                                > {
                                        likedVideo?.includes(item.id.videoId)
                                            ? <Like color='#1390E5' />
                                            : <Like color='none' />
                                    }
                                </button>
                            </div>
                        </div>
                    )
                    : <div>Ничего не найдено</div>
            }
        </>
    )
}