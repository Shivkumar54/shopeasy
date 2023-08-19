import React, { useEffect, useState } from "react"
import Leftsidebar from "./Leftsidebar"
import CardContainer from "./CardContainer"
import useOnlineStatus from "../Utils/usOnlineStatus"
import useProductList from "../Utils/useProductList"
import Internet from "../Components/Internet"

const Body = () => {
  const isOnline = useOnlineStatus()
  const productList = useProductList()

  const [data, setData] = useState(productList)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (productList.length > 0) {
      setData(productList)
      setLoading(false)
    }
  }, [productList])

  const userFilteredItem = (selectedItem) => {
    if (selectedItem === "all") {
      setData(productList)
      return
    }
    const filteredItem = productList.filter((item) => {
      const filtered = item.category == selectedItem
      return filtered
    })
    setData(filteredItem)
  }

  const lowTohigh = () => {
    const sortedList = [...data].sort((a, b) => a.price - b.price)
    setData(sortedList)
  }
  const hightoLow = () => {
    const sortedList = [...data].sort((a, b) => b.price - a.price)
    setData(sortedList)
  }

  if (isOnline === false) return <Internet />
  if (loading) return <div>Loading...</div>
  return (
    <div className="bodyLayout">
      <Leftsidebar
        filter={userFilteredItem}
        lToH={lowTohigh}
        hToL={hightoLow}
      />
      <CardContainer list={data} />
    </div>
  )
}

export default Body

// useprod -> fetch -> null -> data
