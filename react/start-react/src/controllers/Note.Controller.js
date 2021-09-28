import Note from "../models/note";

// controllers job is to RESPOND to user's browser REQUESTS
// so each of these functions would handle a REQ and return a RES (send feedback/errors and stuff)
const NoteController = () => {
  const getNotes = async () => {
    return await Note.findAll();
  };

  const getNoteById = async (id) => {
    return await Note.findById(id);
  };

  const addNote = async (note) => {
    await Note.create(note);
  };

  const deleteNote = async (id) => {
    await Note.delete(id);
  };

  const updateNote = async (note) => {
    await Note.update(note);
  };

  return { getNotes, addNote, deleteNote, updateNote, getNoteById };
};

export default NoteController;
