import { createSlice } from "@reduxjs/toolkit"

const videoSliceLength = createSlice({
  name: "sliceLength",
  initialState: {
    videosSliceLength: 0,
  },
  reducers: {
    showLength(state, action) {
      state.videosSliceLength = action.payload
    },
  },
})
export const { showLength } = videoSliceLength.actions
export default videoSliceLength.reducer
