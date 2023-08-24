import { createSlice } from "@reduxjs/toolkit"

const calculateTotalAmount = (items) => {
  const totalItems = items.reduce((total, item) => {
    return total + item.price * 10 * item.quantity
  }, 0)
  return totalItems.toFixed(2)
}

const initialState = {
  items: [],
  totalCost: 0,
}
initialState.totalCost = calculateTotalAmount(initialState.items)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload)
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...newItem, quantity: 1 })
      }
      state.totalCost = calculateTotalAmount(state.items)
    },
    removeItem: (state, action) => {
      const deleteItemByID = action.payload.id
      state.items = state.items.filter((item) => item.id !== deleteItemByID)
      state.totalCost = calculateTotalAmount(state.items)
    },
    updataQuantity: (state, action) => {
      const { id, newQuantity } = action.payload
      const itemToUpdate = state.items.find((item) => item.id === id)
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity
        state.totalCost = calculateTotalAmount(state.items)
      }
    },
    clearCart: (state) => {
      state.items.length = 0
      state.totalCost = 0
    },
  },
})

export const totalItemCost = (state) => state.cart.totalCost

export const { addItem, removeItem, clearCart, updataQuantity } =
  cartSlice.actions

export default cartSlice.reducer
