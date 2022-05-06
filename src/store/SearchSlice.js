import {createSlice} from '@reduxjs/toolkit'



// addLastSearchRequest 
// addMoreVideos
// addToFavorites
// handToggle

const AddToSlice = createSlice({ 
    name: 'addAny',
    initialState:{
        inputValue:''
    },


    reducers:{
        addLastSearchRequest(state, action){
            if(localStorage.getItem('lastSearchRequest') === ''){
                localStorage.removeItem('lastSearchRequest')
            }
                localStorage.setItem('lastSearchRequest',action.payload)
        },

        addToFavorites(state, action){
            localStorage.setItem(action.payload ,action.payload)
        },
    }
}) 
export const { addLastSearchRequest, addToFavorites} = AddToSlice.actions;
export default AddToSlice.reducer;