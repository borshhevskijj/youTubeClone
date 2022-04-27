import React from 'react'
import { NavLink } from 'react-router-dom'
// import {Route,Routes} from 'react-router-dom'
import  cl from '../styles/navBar.module.css'

// import * as css from '../styles/navBar.module.css'



export default function NavBar() {

  
  return (

    <nav className={cl.wrapper}>
        <div className={cl.navigation}>
            <div className={cl.navigation_withoutExit}>
                {/* <NavLink to='/search' className={cl.navLink }> Иконка </NavLink> */}
                <span> Иконка </span>
                <NavLink to='/' className={cl.navLink}> Поиск </NavLink>
                <NavLink to='/favorites' className={cl.navLink}> Избранное </NavLink>
            </div>
              {/* <NavLink to='/' className={cl.navLink}> Выйти </NavLink>  */}
              <span className={cl.navLink}> Выйти </span> 

        </div>

    </nav>
  )
}
