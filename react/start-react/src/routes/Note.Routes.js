import AllNotes from '../views/Notes/All.Notes';
import CreateNote from '../views/Notes/Create.Note';

const allNotes = {
  key: 'allnotes',
  name: 'Notes',
  component: AllNotes,
  path: '/notes',
  exact: true,
};

const createNote = {
  key: 'createnote',
  name: 'Create Note',
  component: CreateNote,
  path: '/notes/create',
};

export const index = [allNotes, createNote];
export default { allNotes, createNote };
