import { db } from "../../utilities"
import {
  addDoc,
  collection,
  updateDoc,
  doc
} from "firebase/firestore"

const addOrder = async (order) => {
  const ordersCollection = collection(db, "orders")
  const response = await addDoc(ordersCollection, order)
  return response.id
}


const updateOrder = async (id, payload) => {
  const orderDoc = doc(db, "orders", id)
  updateDoc(orderDoc, payload)
}

export const ordersService = { addOrder, updateOrder }