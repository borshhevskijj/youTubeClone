import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import AddToSlice from './SearchSlice'


export default configureStore ({
    reducer:{
        AddToSlice,
    },
});
// export const store = createStore (rootReducer,composeWithDevTools())
