import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import WhishlistSlice from "./WhishlistSlice"

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: WhishlistSlice,
  },
})

export default appStore
