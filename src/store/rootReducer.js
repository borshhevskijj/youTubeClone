import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import AddToSlice from "./SearchSlice"
import videoSliceLength from "./sliceVideosSlice"

export default configureStore({
  reducer: {
    AddToSlice,
    videoSliceLength,
  },
})
