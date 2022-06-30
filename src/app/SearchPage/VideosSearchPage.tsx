import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../store/SearchSlice'
import { showLength } from '../../store/sliceVideosSlice'
import cl from '../../styles/search.module.scss'
import { IvideoItems } from '../../interfaces/searchResult'
import { handToggle } from '../Search'
import Like from '../svg/Like'
import { IvideosSearchPageProps } from '../../interfaces/searchPageProps'
import ToTopBtn from '../UI/ToTopBtn'
import Iframe from '../Iframe'



const trancateString = (string: string, maxLength = 35) => {
    if (string.length > maxLength) {
        return string.slice(0, maxLength - 1) + ' ...'
    }
    return string
}


export default function VideosSearchPage({ videos }: IvideosSearchPageProps) {

    const dispatch = useDispatch();
    const [likedVideo, setLikedVideo] = useState<IvideoItems['id']['videoId'][]>([])
    const [toggle, setToggle] = useState<boolean>(false)


    useEffect(() => {
        const likedVideos = () => {
            return videos?.items
                .map((item: IvideoItems) => item.id.videoId)
                .filter((videoId: IvideoItems['id']['videoId']) => videoId !== undefined && `https://www.youtube.com/embed/${videoId}` === localStorage.getItem(`https://www.youtube.com/embed/${videoId}`))
        }
        setLikedVideo(likedVideos)

    }, [toggle, videos])



    //#region infinityScroll

    const [slice, setSlice] = useState(10)
    const videoItemsSlice = videos?.items.slice(0, slice)



    const scrollHandler = (e: Event) => { // если до конца страницы остается 300 px то  добавляет еще 10 видео в срез
        const isBottom = (e: any) => e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)

        if ((isBottom(e) < 300)) {
            setSlice(slice + 10)
            dispatch(showLength(videoItemsSlice.length))
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    })
    //#endregion




    return (
        <>
            {
                videos
                    ? videoItemsSlice.map((item: IvideoItems, index: number) =>
                        <div key={index} className={cl.iFrameYouTubeVideo}>


                            <Iframe item={item} />

                            <div className={cl.infoWrapper}>
                                <div className={cl.info}>
                                    <p style={{ color: 'black' }}>{trancateString(item?.snippet.title, 51)} </p>
                                    <p>{trancateString(item?.snippet.channelTitle, 40)}</p>
                                </div>

                                <button
                                    onClick={
                                        () => dispatch(addToFavorites(`https://www.youtube.com/embed/${item?.id.videoId}`))
                                            && handToggle(setToggle, toggle)
                                    }
                                > {
                                        likedVideo?.includes(item?.id.videoId)
                                            ? <Like color='#1390E5' />
                                            : <Like color='none' />
                                    }
                                </button>
                            </div>
                        </div>
                    )
                    : <div>Ничего не найдено</div>
            }
            <ToTopBtn />

        </>
    )
}