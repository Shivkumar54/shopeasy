import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./src/Header"
import Body from "./src/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Cart from "./src/Cart"
import Login from "./src/Login"
import Error from "./src/Error"
import Carddetails from "./Components/Carddetails"
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
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
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product/:id",
        element: <Carddetails />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />)
