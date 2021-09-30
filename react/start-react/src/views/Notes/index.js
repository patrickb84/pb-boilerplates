import { useEffect, useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NoteController from '../../controllers/Note.Controller';

const AllNotes = () => {
  const { getNotes } = NoteController();

  const [notesList, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(notes => {
      console.log(notes);
      setNotes(notes);
    });
  }, []);

  return (
    <div className='py-5'>
      <div className='my-4 container-fluid'>
        <div className='d-flex align-items-center justify-content-between pt-3 pb-4'>
          <h1 className='mb-0'>Notes</h1>
          <div>
            <Link to='/notes/create' className='btn btn-primary'>
              Create Note
            </Link>
          </div>
        </div>

        <Card>
          <Card.Header>Table</Card.Header>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Created</th>
                  <th>Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notesList.map(note => {
                  return (
                    <tr key={note.id}>
                      <td>{note.id}</td>
                      <td>{note.title}</td>
                      <td>{note.body}</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Button variant='primary' size='sm'>
                          Edit
                        </Button>
                        <Button variant='secondary' size='sm' className='ms-1'>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const NoteCell = ({ note }) => {
  const { id, title, body } = note;
  return (
    <>
      <small style={{ fontSize: 10 }}>{id}</small>
      <h4>{title}</h4>
      <p>{body}</p>
    </>
  );
};

export default AllNotes;
