// models/Note.js

/**
 * Note object:
 *   id, title, body. createdBy, createdAt, updatedBy, updatedAt
 */

const Note = () => {
  const selectAll = () => {
    // TODO
    return [];
  };

  const selectById = (id) => {
    // TODO
    return {};
  };

  const insert = (note) => {
    // TODO
    return (newId = 0);
  };

  const update = (note) => {
    // TODO
  };

  const destroy = (id) => {
    // TODO
  };

  return { selectAll, selectById, insert, update, destroy };
};

export default Note;
