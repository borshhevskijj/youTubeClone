import React, { Suspense } from 'react';
import NavBar from './app/NavBar';
import {Route,Routes} from 'react-router-dom'
import Loading from './app/UI/Loading';

const Search = React.lazy(()=> import('./app/Search'));
const Favorites = React.lazy(()=> import('./app/FavoritesPage/Favorites'));

export default function App() {
  return (

    <div>
      <NavBar/>
          <Routes>
              <Route path='*' element ={<Loading/>}/> 
              
              <Route path='/' element={
              <Suspense fallback={<Loading/>}>
                  <Search/> 
              </Suspense>}/>
              
              <Route path='/favorites' element={
              <Suspense fallback={<Loading/>}>
                  <Favorites/>
              </Suspense>}/>

              {/* <Route path='/registration' element={
              <Suspense fallback={<Loading/>}>
                  <Registration/>
              </Suspense>}/> */}

          </Routes>
    </div>
    )
}

