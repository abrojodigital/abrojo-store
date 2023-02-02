const get = async (id) => {
  const response = await fetch('Data/products.json')
  const data = await response.json()
  return data.find( elem => elem.id === id )
}

const getByCategory = async (id) => {
  const response = await fetch('Data/products.json')
  const data = await response.json()
  return data.filter( product => product.categoryId === id || id === 0 )
}

const getAll = async () => {
  const response = await fetch('Data/products.json')
  const data = await response.json()
  return data
}

export const productsService = { getAll, get, getByCategory }