import {createSlice} from '@reduxjs/toolkit'


const favorites = createSlice({ 
    
    name: 'favorites',
    initialState:{
        favorites: Object.keys(localStorage)
        .filter( favorite =>  favorite  !== "lastSearchRequest" && favorite  !== "toggle" && favorite  !== "viev")
        .map(favorite => localStorage.getItem(favorite))
    },

    reducers:{
        
        getFavorites(state, action){ 
            state.favorites = [...state.favorites,'nokia']
        },

        DeleteVideo(state, action){    
            console.log('prohodit');   
           state.favorites = state.favorites.filter(fav => !state.favorites.includes(fav))
            localStorage.removeItem(state.favorites) 
        },

       
    }
}) 
export const { getFavorites, DeleteVideo } = favorites.actions;
export default favorites.reducer;