import React from 'react'
import { IvideoItems } from '../interfaces/searchResult';


type items = {
    item: IvideoItems
}

// const createIframe = (item: IvideoItems, e: React.MouseEvent<HTMLElement>,videoID:string,title:string) => {
const createIframe = (e: React.MouseEvent<HTMLElement>, videoID: string, title: string) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=0`)
    iframe.setAttribute('title', title)
    iframe.setAttribute('frameBorder', '0')
    iframe.setAttribute('allowFullScreen', '1')
    iframe.setAttribute('allow', 'autoplay')

    e.currentTarget.parentElement?.insertBefore(iframe, e.currentTarget)
    e.currentTarget?.parentElement?.removeChild(e.currentTarget)
}

export default function Iframe({ item }: items) {

    return (
        <>
            <img
                src={item.snippet.thumbnails?.medium.url}
                onClick={e => createIframe(e, item?.id.videoId, item?.snippet.title)}
                loading='lazy'
                alt={item.snippet.title}
            />

            <div id='iframe'>
            </div>
        </>
    )
}
