import React, { useState, useEffect } from 'react'
import cl from '../../styles/search.module.scss'
import GoToTop from '../svg/GoToTop'


export default function ToTopBtn() {
    const [isTop, setIsTop] = useState(true)

    const isTopOfPage = () => {
        if (document.documentElement.scrollTop >= window.innerHeight) {
            return setIsTop(false)
        }
        return setIsTop(true)
    }

    useEffect(() => {
        document.addEventListener('scroll', isTopOfPage)
        return () => {
            document.removeEventListener('scroll', isTopOfPage)
        }
    }, [])


    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <button onClick={() => backToTop()} className={`${isTop ? cl.goToTopHidden : cl.goToTop}`}>
            <GoToTop />
        </button>
    )
}

