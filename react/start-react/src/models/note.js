import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
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

Note.findById = async (id) => {
  return doc(db, "notes", id).data();
};

Note.create = async (note) => {
  try {
    note.createdAt = new Date();
    const docRef = await addDoc(collection(db, "notes"), { ...note });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

Note.delete = async (id) => {
  try {
    await deleteDoc(doc(db, "notes", id));
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

Note.update = async (note) => {
  try {
    const { id, ...rest } = note;
    const noteRef = doc(db, "notes", id);
    await updateDoc(noteRef, { ...rest });
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export default Note;
