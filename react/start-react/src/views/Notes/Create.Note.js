import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NoteController from '../../controllers/Note.Controller';

const CreateNote = () => {
  const { addNote } = NoteController();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const note = { title, body }; // add dates in the model
    addNote(note);
  };

  return (
    <div className='py-5'>
      <div className='my-4 container-fluid'>
        <div className='row'>
          <div className='pt-3 pb-4'>
            <small>
              <Link to='/notes'>Back</Link>
            </small>
            <h2 className='mb-0'>Create Note</h2>
          </div>
          <div className='col-md-6'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Title'
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Body</Form.Label>
                <Form.Control
                  as='textarea'
                  onChange={e => {
                    setBody(e.target.value);
                  }}
                  rows={3}
                />
              </Form.Group>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
