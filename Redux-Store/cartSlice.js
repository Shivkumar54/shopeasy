import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // actions call madtevi
    addItem: (state, action) => {
      // state.items.push(action.payload)
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...newItem, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const deleteItemByID = action.payload.id
      state.items = state.items.filter((item) => item.id !== deleteItemByID)
    },
    updataQuantity: (state, action) => {
      const { id, newQuantity } = action.payload
      const itemToUpdate = state.items.find((item) => item.id === id)
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity
      }
    },
    clearCart: (state) => {
      state.items.length = 0
    },
  },
})

export const { addItem, removeItem, clearCart, updataQuantity } =
  cartSlice.actions

export default cartSlice.reducer
