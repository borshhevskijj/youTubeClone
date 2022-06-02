import React from 'react'
import cl from '../styles/search.module.scss'
import Input from './SearchPage/Input';


if (localStorage.getItem('lastSearchRequest') === '') {
  localStorage.removeItem('lastSearchRequest')
}
export const handToggle = (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable: boolean) => { // переключатель состояний
  setFn(!variable)
}

export default function Search() {
  return (
    <section className={cl.wrapper}>
      <Input />
    </section>
  )
}
