import Note from "../models/note";

const NoteController = () => {
  const getNotes = async () => {
    const notes = await Note.findAll();
    console.log("GET DATA", notes);
    return notes;
  };

  const addNote = async (note) => {
    await Note.create(note);
  };

  return { getNotes, addNote };
};

export default NoteController;
