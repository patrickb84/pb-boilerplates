import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import db from "../app/config/db";

const Note = () => {};

Note.findAll = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return data;
  } catch (error) {
    throw error;
  }
};

Note.findById = async (id) => {
  try {
    return doc(db, "notes", id).data();
  } catch (error) {
    throw error;
  }
};

Note.create = async (note) => {
  try {
    note.createdAt = new Date();
    const docRef = await addDoc(collection(db, "notes"), { ...note });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

Note.delete = async (id) => {
  try {
    await deleteDoc(doc(db, "notes", id));
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

Note.update = async (note) => {
  try {
    const { id, ...rest } = note;
    const noteRef = doc(db, "notes", id);

    await updateDoc(noteRef, { ...rest });
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

export default Note;
