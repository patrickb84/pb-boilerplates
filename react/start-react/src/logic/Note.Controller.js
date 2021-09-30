import Note from "../models/Note";

const NoteController = () => {
  const note = Note();

  const index = () => {
    try {
      const data = note.selectAll();
      // data ...
      return data;
    } catch (error) {
      console.error(error.message);
      // todo: handle
    }
  };

  const detail = (id) => {
    try {
      const item = note.selectById(id);
      // item ...
      return item;
    } catch (error) {
      console.error(error.message);
      // todo: handle
    }
  };

  const create = (newNote) => {
    try {
      const noteId = note.insert(newNote);
      return noteId;
    } catch (error) {
      console.error(error.message);
      // todo: handle
    }
  };

  const edit = (updatedNote) => {
    try {
      note.update(updatedNote);
    } catch (error) {
      console.error(error.message);
      // todo: handle
    }
  };

  const destroy = (id) => {
    try {
      note.destroy(id);
    } catch (error) {
      console.error(error.message);
      // todo: handle
    }
  };

  // search
  // batch actions (batch select, delete, etc.)
  // upload image...

  return { index, detail, create, edit, destroy };
};

export default NoteController;
