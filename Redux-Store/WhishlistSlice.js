const { createSlice } = require("@reduxjs/toolkit")

const WhishlistSlice = createSlice({
  name: "favorite",
  initialState: {
    favItem: [],
  },
  reducers: {
    addFavItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.favItem.find((item) => item.id === newItem.id)
      if (existingItem) {
        alert("Item Already Exists")
      } else {
        state.favItem.push({ ...newItem })
      }
    },
    removeFavItem: (state, action) => {
      // state.favItem.pop()
      const deleteItembyId = action.payload.id
      state.favItem = state.favItem.filter((item) => {
        return item.id !== deleteItembyId
      })
    },
    clearFavItem: (state) => {
      state.favItem.length = 0
    },
  },
})

export const { addFavItem, removeFavItem, clearFavItem } =
  WhishlistSlice.actions
export default WhishlistSlice.reducer
