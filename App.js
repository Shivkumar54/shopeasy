import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./src/Header"
import Body from "./src/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Cart from "./src/Cart"
import Login from "./src/Login"
import Error from "./src/Error"
import Carddetails from "./Components/Carddetails"
import { ProductsHolder, useProductContext } from "./Utils/ProductContext"
const App = () => {
  const productList = useProductContext()
  console.log(productList)
  return (
    <ProductsHolder>
      <div>
        {/* <Header /> */}
        <Outlet />
      </div>
    </ProductsHolder>
  )
}
export default App

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: [<Header />, <Cart />],
      },
      {
        path: "/login",
        element: [<Header />, <Login />],
      },
      {
        path: "/product/:id",
        element: [<Header />, <Carddetails />],
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />)
