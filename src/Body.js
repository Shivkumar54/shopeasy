import React, { useEffect, useState } from "react"
import Leftsidebar from "./Leftsidebar"
import CardContainer from "./CardContainer"
import useOnlineStatus from "../Utils/usOnlineStatus"
import useProductList from "../Utils/useProductList"
import Internet from "../Components/Internet"
import Header from "./Header"

const Body = () => {
  const isOnline = useOnlineStatus()
  const productList = useProductList()

  const [data, setData] = useState(productList)
  const [loading, setLoading] = useState(true)
  const [searchedTxt, setSearchedTxt] = useState("")
  const [inputVal, setInputVal] = useState("")

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

  const filteredDatas = (searchedTxt, data) => {
    const filteredData = data.filter((item) =>
      item?.title?.toString().toLowerCase().includes(searchedTxt.toLowerCase())
    )
    setData(filteredData)
  }

  const onSearchChange = (e) => {
    setSearchedTxt(e.target.value)
    setInputVal(e.target.value)
  }

  return (
    <div className="rootLayout">
      <Header
        inputVal={inputVal}
        filterItems={filteredDatas}
        searchChange={onSearchChange}
        data={data} // Pass the data array as a prop
      />
      <div className="bodyLayout">
        <Leftsidebar
          filter={userFilteredItem}
          lToH={lowTohigh}
          hToL={hightoLow}
        />
        {inputVal.length > 3 && !data ? (
          <p>No data Found</p>
        ) : (
          <CardContainer list={data} filteredDatas={filteredDatas} />
        )}
      </div>
    </div>
  )
}

export default Body
