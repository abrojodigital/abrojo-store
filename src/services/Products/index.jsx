import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"

const get = async (id) => {
  const db = getFirestore()
  const productDoc = doc(db, 'products', id)
  const response = await getDoc(productDoc)

  return { id: response.id, ...response.data() }
}

const getByCategory = async (id) => {
  const db = getFirestore()
  const productsCollection = collection(db, 'products')

  const q = query(productsCollection, where('categoryId', '==', id))
  const response = await getDocs(q)
  const productsByCategory = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  return productsByCategory
}

const getAll = async () => {
  const db = getFirestore()
  const productsCollection = collection(db, "products")
  const response = await getDocs(productsCollection)
  const products = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return products
}

const getTotal =  (products, cartItems) => cartItems.reduce(
      (total, cartItem) =>
          total +
          (
              products.find(product => product.id === cartItem.id)?.price ||
              0
          ) *
          cartItem.quantity,
      0
  )


export const productsService = { getAll, get, getByCategory, getTotal }