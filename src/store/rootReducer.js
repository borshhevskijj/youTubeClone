import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import AddToSlice from './SearchSlice'
import favoritesSlice from "./favoritesSlice";


export default configureStore ({
    reducer:{
        AddToSlice,
        favoritesSlice,
    },
});
// export const store = createStore (rootReducer,composeWithDevTools())
