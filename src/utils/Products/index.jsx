const getProduct = async (id) => {
  const response = await fetch('Data/products.json')
  const data = await response.json()
  return data.find( elem => elem.id === id )
}
const getAllProducts = async () => {
  const response = await fetch('Data/products.json')
  const data = await response.json()
  return data
}

export const productsService = { getAllProducts, getProduct }