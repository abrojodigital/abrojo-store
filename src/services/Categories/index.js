import { db } from "../../utilities"
import {
  doc,
  collection,
  getDocs,
} from "firebase/firestore"


const getAll = async () => {
  const categoriesCollection = collection(db, "categories")
  const response = await getDocs(categoriesCollection)
  const categories = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  console.log(categories)
  return categories
}

export const categoriesService = { getAll }