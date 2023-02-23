import { db } from "../../utilities"
import {
  collection,
  getDocs,
} from "firebase/firestore"


const getAll = async () => {
  const categoriesCollection = collection(db, "categories")
  const response = await getDocs(categoriesCollection)
  const categories = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return categories
}

export const categoriesService = { getAll }