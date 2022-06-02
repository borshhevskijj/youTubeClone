import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../store/SearchSlice'
import cl from '../../styles/search.module.scss'
import { IvideoItems } from '../../interfaces/searchResult'
import { handToggle } from '../Search'
import Like from '../svg/Like'
import { IvideosSearchPageProps } from '../../interfaces/searchPageProps'

export default function VideosSearchPage({ videos }: IvideosSearchPageProps) {
    const dispatch = useDispatch();
    const [likedVideo, setLikedVideo] = useState<IvideoItems['id']['videoId'][]>([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const likedVideos = () => {
            return videos?.items
                .map((item: IvideoItems) => item.id.videoId)
                .filter((videoId: IvideoItems['id']['videoId']) => videoId !== undefined && `https://www.youtube.com/embed/${videoId}` === localStorage.getItem(`https://www.youtube.com/embed/${videoId}`))
        }
        setLikedVideo(likedVideos)

    }, [toggle, videos])




    return (
        <>
            {
                videos
                    ? videos.items.map((item: IvideoItems, index: number) =>
                        <div key={index}
                            className={cl.iFrameYouTubeVideo}>
                            <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} loading='lazy' title={item.snippet.title} frameBorder="0" allowFullScreen></iframe>

                            <div className={cl.infoWrapper}>
                                <div className={cl.info}>
                                    <p style={{ color: 'black', maxHeight: '60px', textOverflow: 'ellipsis' }}>{item.snippet.title}</p>
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