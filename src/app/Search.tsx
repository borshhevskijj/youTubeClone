import React  from 'react'
// import  from 'react'

import cl from '../styles/search.module.css'
// api 'key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw'
import Input from './SearchPage/Input';


if(localStorage.getItem('lastSearchRequest') === ''){
  localStorage.removeItem('lastSearchRequest')
}
export  const handToggle= (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable:boolean)=> { // переключатель состояний
  setFn(!variable)
}

export default function Search() {

    // const lastSearchRequest = localStorage.getItem('lastSearchRequest')//получаем последний запрос

    // const [maxResult,setMaxResult] = useState<number>(6) //??
    // const [videos, setVideos] = useState<Ivideos | undefined>() // массив с видео     
    // const [inputValue, setInputValue]= useState <string | undefined> (lastSearchRequest??'как написать свой ютуб?') // инпут
    // const debouncedInput = useDebounce(inputValue as string,500)// выводит текст с задержкой
    // const inputValueToUrl = (inputValue as string).replace(/ /gim,'%20') // для url адреса убирает пробелы и заменяет их символом //INPUT


    // const [viev,setViev] = useState<boolean>(JSON.parse(localStorage.getItem('viev') as string) || false) // для изменения списка с видео
    // const [toggle,setToggle] = useState<boolean>(JSON.parse(localStorage.getItem('toggle') as string) ||false)
    
    
    // const videosToColumn ='repeat(1,minmax(50px,1fr))';
    // const videosToRow ='repeat(3,minmax(100px,1fr))';

    
    // const lastSearchResult=()=>{
    //   handToggle(setToggle,toggle)
    //   localStorage.setItem('lastSearchRequest',inputValue as string) // устанавливаем последний запрос
    // }                                                                                                                       //INPUT
    
//  при нажатии на кнопку "Найти" сохраняет в LS значение флага( true | false )
//     useEffect(()=>{
//       setToggle(JSON.parse(localStorage.getItem('toggle') as string))
//     },[])
//     useEffect(()=>{
//       localStorage.setItem('toggle',JSON.stringify(toggle))
//     },[toggle])
//     // 
// // при нажатии на кнопку смены вида сохраняет в LS значение флага(true|false)
//     useEffect(()=>{
//       setViev(JSON.parse(localStorage.getItem('viev') as string))
//     },[])
//     useEffect(()=>{
//       localStorage.setItem('viev',JSON.stringify(viev))
//     },[viev])
// //

  //  const handToggle= (setFn: React.Dispatch<React.SetStateAction<boolean>>, variable:boolean)=> { // переключатель состояний
  //       setFn(!variable)
  //     }
      
      // const addMoreVideos =()=> {
      //   setMaxResult(maxResult + 6)
      // }

//     useEffect(() => {
//       axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${inputValueToUrl}&key=AIzaSyBJNM6bUpw6P3lhIWkUzrZmYekhbSO2o_8`)
//       .then(res => {
//         const video:Ivideos = res.data
//         setVideos(video)
//         console.log('обновляется')
//       })  
// },[toggle,maxResult]) 

// extendableEvent.waitUntil(promise);

  

return (
    <section  className={cl.wrapper}>
      
      <Input/>
      {/* <Viev/> */}
        {/* {
         videos
        ? videos.items.map( (item:IvideoItems) => 
            <div key={item.id.videoId}  className={cl.iFrameYouTubeVideo}>
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title='{video.id}' frameBorder="0" allowFullScreen></iframe>
                <p>{item.snippet.channelTitle}</p>
                <button 
                onClick={()=> dispatch(addToFavorites(`https://www.youtube.com/embed/${item.id.videoId}`))} 
                className={cl.addToFavorite}
                >LIKE
                </button>
            </div>
          )
        : <div>Ничего не найдено</div>
        } */}
      {/* <VideosSearchPage addToFavorite={addToFavorites} videos={videos} items={videos?.items}/> */}

{/* <button onClick={()=> addMoreVideos()}> Показать еще</button> */}
      </section>
)  
}
