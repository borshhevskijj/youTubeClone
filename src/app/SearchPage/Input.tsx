import React,{ useState, useEffect}  from 'react'
import useDebounce from '../../customHooks/useDebounce';
import cl from '../../styles/search.module.scss'
import { handToggle } from '../Search';
import SearchPage from './SearchPage';


const lastSearchRequest = localStorage.getItem('lastSearchRequest')

export default function Input() {
  const [inputValue, setInputValue]= useState <string | undefined> (lastSearchRequest??'как написать свой ютуб?') // инпут
  const [toggle,setToggle] = useState<boolean>(JSON.parse(localStorage.getItem('toggle') as string) || false)
  const debouncedInput = useDebounce(inputValue as string,500)// выводит текст с задержкой
  const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом
  
  const [isLoaded,setIsLoaded]=useState(false)
 


      useEffect(()=>{
        setToggle(JSON.parse(localStorage.getItem('toggle') as string))
      },[])
      useEffect(()=>{
        localStorage.setItem('toggle',JSON.stringify(toggle))
      },[toggle])
//-----------------------------------------------------------------------

      // useEffect(()=>{
      //   localStorage.setItem('isLoaded',JSON.stringify(isLoaded))
      // },[isLoaded])

      // useEffect(()=>{
      //   setIsLoaded(JSON.parse(localStorage.getItem('isLoaded') as string))
      // },[])

  const lastSearchResult=()=>{
        handToggle(setToggle,toggle)
        setIsLoaded(true)
        // localStorage.setItem('lastSearchRequest',inputValue as string) // устанавливаем последний запрос
        localStorage.setItem('lastSearchRequest',inputValue!) // устанавливаем последний запрос
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
                <button onClick={()=> lastSearchResult() } className={cl.searchButton}>НАЙТИ</button>
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
