import React,{ useState, useEffect}  from 'react'
// import useDebounce from '../../customHooks/useDebounce';
import useDebounce from '../../customHooks/useDebounce';
// import cl from '../styles/search.module.css'
import cl from '../../styles/search.module.css'
import { handToggle } from '../Search';
import SearchPage from './SearchPage';


const lastSearchRequest = localStorage.getItem('lastSearchRequest')//получаем последний запрос

export default function Input(props:any) {
  const [inputValue, setInputValue]= useState <string | undefined> (lastSearchRequest??'как написать свой ютуб?') // инпут
  const [toggle,setToggle] = useState<boolean>(JSON.parse(localStorage.getItem('toggle') as string) || false)
  const debouncedInput = useDebounce(inputValue as string,500)// выводит текст с задержкой
  const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом


      useEffect(()=>{
        setToggle(JSON.parse(localStorage.getItem('toggle') as string))
      },[])
      useEffect(()=>{
        localStorage.setItem('toggle',JSON.stringify(toggle))
      },[toggle])

  const lastSearchResult=()=>{
        handToggle(setToggle,toggle)
        localStorage.setItem('lastSearchRequest',inputValue as string) // устанавливаем последний запрос
      }  


  return (
    // <section  className={cl.wrapper}>
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

            <SearchPage toggle={toggle} inputValueToUrl={inputValueToUrl} debouncedInput={debouncedInput}/>
    </>



    )
}
