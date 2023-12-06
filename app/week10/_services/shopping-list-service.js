import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

// Fetches items for a specific user
export const getItems = async (userId) => {
  const itemsCol = collection(db, "users", userId, "items");
  const itemSnapshot = await getDocs(itemsCol);
  const itemsList = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return itemsList;
};

// Adds a new item for a specific user
export const addItem = async (userId, item) => {
  const itemsCol = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCol, item);
  return docRef.id;
};