import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../store/SearchSlice'
import { showLength } from '../../store/sliceVideosSlice'
import cl from '../../styles/search.module.scss'
import { IvideoItems } from '../../interfaces/searchResult'
import { handToggle } from '../Search'
import Like from '../svg/Like'
import { IvideosSearchPageProps } from '../../interfaces/searchPageProps'


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
    const startIndex = 0
    const videoItemsSlice = videos?.items.slice(startIndex, slice)

    const isBottom = (e: any) => e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)


    const [flag, setFlag] = useState(false)

    const scrollHandler = (e: Event) => { // если до конца страницы остается 100 px то  добавляет еще 10 видео в срез
        try {
            if ((isBottom(e) < 100)) {
                console.log('дошел до края');
                setSlice(slice + 10)
                dispatch(showLength(videoItemsSlice.length))
                setFlag(true)
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setFlag(false)
        }
    }


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [isBottom])
    //#endregion


    const trancateString = (string: string, maxLength = 35) => {
        if (string.length > maxLength) {
            return string.slice(0, maxLength - 1) + ' ...'
        }
        return string
    }


    //#region create IFRAME 

    // const createIframe = (item: IvideoItems, e: React.MouseEvent<HTMLElement>) => {
    //     const iframe = React.createElement('iframe', {
    //         src: `https://www.youtube.com/embed/${item?.id.videoId}?autoplay=1&mute=0`,
    //         title: item?.snippet.title,
    //         frameBorder: 0,
    //         allowFullScreen: 1,
    //         allow: 'autoplay',
    //     })
    //     // const iframe = <iframe src={`https://www.youtube.com/embed/${item?.id.videoId}?autoplay=1&mute=0`}
    //     //     frameBorder="0" title='s'></iframe>


    //     e.currentTarget.parentElement?.insertBefore(iframe, e.currentTarget)
    //     e.currentTarget?.parentElement?.removeChild(e.currentTarget)
    // }



    const createIframe = (item: IvideoItems, e: React.MouseEvent<HTMLElement>) => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${item?.id.videoId}?autoplay=1&mute=0`)
        iframe.setAttribute('title', item?.snippet.title)
        iframe.setAttribute('frameBorder', '0')
        iframe.setAttribute('allowFullScreen', '1')
        iframe.setAttribute('allow', 'autoplay')
        iframe.setAttribute('allow', 'autoplay')

        e.currentTarget.parentElement?.insertBefore(iframe, e.currentTarget)
        e.currentTarget?.parentElement?.removeChild(e.currentTarget)
    }
    //#endregion




    return (
        <>
            {
                videos
                    ? videoItemsSlice.map((item: IvideoItems, index: number) =>
                        <div key={index} className={cl.iFrameYouTubeVideo}>

                            <img
                                src={item.snippet.thumbnails?.medium.url}
                                onClick={e => createIframe(item, e)}
                                loading='lazy'
                                alt={item.snippet.title} />

                            <div className={cl.infoWrapper}>
                                <div className={cl.info}>
                                    <p>{index + 1}</p>
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
        </>
    )
}