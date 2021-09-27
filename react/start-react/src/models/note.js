import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../config/db";

const Note = () => {};

Note.findAll = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

Note.create = async (note) => {
  try {
    const docRef = await addDoc(collection(db, "notes"), { ...note });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default Note;
