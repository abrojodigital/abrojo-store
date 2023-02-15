import { useState, useEffect } from "react"
import { productsService } from "../services/Products"

export const useProductList = (category) => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setIsLoading(true)

    if (category !== "todas") {
      productsService.getByCategory(category)
        .then(data => setProducts(data))
        .finally(() => setIsLoading(false))
    } else {
      productsService.getAll()
        .then(data => setProducts(data))
        .finally(() => setIsLoading(false))
    }
  }, [category])

  return { isLoading, products }
}

