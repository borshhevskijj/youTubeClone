import { createSlice } from "@reduxjs/toolkit"

const AddToSlice = createSlice({
  name: "addAny",
  initialState: {
    inputValue: "",
  },

  reducers: {
    addToFavorites(state, action) {
      localStorage.setItem(action.payload, action.payload)
    },
  },
})
export const { addToFavorites } = AddToSlice.actions
export default AddToSlice.reducer
