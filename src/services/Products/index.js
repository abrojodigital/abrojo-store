import { db } from "../../utilities"
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where
} from "firebase/firestore"

const get = async (id) => {
  const productDoc = doc(db, 'products', id)
  const response = await getDoc(productDoc)

  return { id: response.id, ...response.data() }
}

const getByCategory = async (categoryId) => {
  const productsCollection = collection(db, 'products')

  const q = query(productsCollection, where('categoryId', '==', categoryId))
  const response = await getDocs(q)
  const productsByCategory = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  return productsByCategory
}

const getAll = async () => {
  const productsCollection = collection(db, "products")
  const response = await getDocs(productsCollection)
  const products = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return products
}

const updateStock = async (id, payload) => {
  const productDoc = doc(db, "products", id)
  updateDoc( productDoc, payload )
}

export const productsService = { getAll, get, getByCategory, updateStock }
