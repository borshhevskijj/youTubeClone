import React, { useState, useEffect } from 'react'
import useDebounce from '../../customHooks/useDebounce';
import cl from '../../styles/search.module.scss'
import { handToggle } from '../Search';
import SearchPage from './SearchPage';



export default function Input() {
  const [inputValue, setInputValue] = useState<string>('')
  const [toggle, setToggle] = useState<boolean | undefined>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false) // контролирует запросы к API
  const debouncedInput = useDebounce(inputValue, 500)// выводит текст с задержкой
  const inputValueToUrl = (inputValue).replace(/ /gim, '%20') // для url адреса убирает пробелы и заменяет их символом




  useEffect(() => {
    const toggleInLS: boolean = JSON.parse(localStorage.getItem('toggle')!) || false
    setToggle(toggleInLS)

    const lastSearchRequest = localStorage.getItem('lastSearchRequest') || 'memes'
    setInputValue(lastSearchRequest)
  }, [])

  useEffect(() => {
    localStorage.setItem('toggle', JSON.stringify(toggle))
  }, [toggle])


  const setStatesAndLastSearchRequest = () => {
    handToggle(setToggle as React.Dispatch<React.SetStateAction<boolean>>, toggle!) // следит за нажатием на кнопку "найти"
    setIsLoaded(true)  // состояние загрузки видео
    localStorage.setItem('lastSearchRequest', inputValue)
  }


  // localStorage.removeItem('lastSearchRequest')
  return (
    <>
      <div className={cl.search}>
        <h1>Поиск видео</h1>
        <div className={cl.input_field}>
          <input
            type="text"
            required
            spellCheck={false}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button onClick={() => setStatesAndLastSearchRequest()} className={cl.searchButton}>НАЙТИ</button>
        </div>
      </div>
      <SearchPage
        setIsLoaded={setIsLoaded}
        isLoaded={isLoaded}
        toggle={toggle!}
        inputValueToUrl={inputValueToUrl}
        debouncedInput={debouncedInput}
      />
    </>
  )
}

