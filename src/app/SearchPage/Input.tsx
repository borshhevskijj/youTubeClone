import React, { useState, useEffect } from 'react'
import useDebounce from '../../customHooks/useDebounce';
import cl from '../../styles/search.module.scss'
import { handToggle } from '../Search';
import SearchPage from './SearchPage';



export default function Input() {
  const lastSearchRequest = localStorage.getItem('lastSearchRequest') || 'популярное'

  const [inputValue, setInputValue] = useState<string>(lastSearchRequest)
  const [toggle, setToggle] = useState<boolean>(JSON.parse(localStorage.getItem('toggle')!) || false)
  const debouncedInput = useDebounce(inputValue, 500)// выводит текст с задержкой
  const inputValueToUrl = (inputValue).replace(/ /gim, '%20') // для url адреса убирает пробелы и заменяет их символом

  const [isLoaded, setIsLoaded] = useState(false)



  useEffect(() => {
    setToggle(JSON.parse(localStorage.getItem('toggle')!))
  }, [])
  useEffect(() => {
    localStorage.setItem('toggle', JSON.stringify(toggle))
  }, [toggle])


  const setStatesAndLastSearchRequest = () => {
    handToggle(setToggle, toggle)
    setIsLoaded(true)
    localStorage.setItem('lastSearchRequest', inputValue) // устанавливаем последний запрос
  }

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
        toggle={toggle}
        inputValueToUrl={inputValueToUrl}
        debouncedInput={debouncedInput}
      />
    </>
  )
}
