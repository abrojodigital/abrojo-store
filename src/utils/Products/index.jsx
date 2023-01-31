const getAllProducts = async () => {
  const response = await fetch('Data/products.json')
  const data = await response.json()
  return data
}

export { getAllProducts }