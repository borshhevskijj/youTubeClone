import React from 'react'
import { NavLink } from 'react-router-dom'
// import {Route,Routes} from 'react-router-dom'
import cl from '../styles/navBar.module.scss'
import Logotype from './svg/Logotype'

export default function NavBar() {
  return (
    <nav className={cl.wrapper}>
      <div className={cl.navigation}>
        <Logotype />
        <NavLink to='/' className={cl.navLink}> Поиск </NavLink>
        <NavLink to='/favorites' className={cl.navLink}> Избранное </NavLink>
      </div>
    </nav>
  )
}
