import { useEffect, useState } from "react"

const useCardDetails = (id) => {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    getCarddetails()
  }, [])
  const getCarddetails = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    setDetails(data)
  }
  return details
}
export default useCardDetails
