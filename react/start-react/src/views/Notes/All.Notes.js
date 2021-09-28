import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import NoteController from "../../controllers/Note.Controller";

const AllNotes = () => {
  const { getNotes, addNote } = NoteController();

  const [notesList, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    getNotes().then((notes) => {
      console.log(notes);
      setNotes(notes);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = { title, body }; // add dates in the model
    addNote(note);
  };

  return (
    <div className="container">
      <h2>AllNotes</h2>

      <hr />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            rows={3}
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>

      <hr />

      {notesList.map((note) => {
        return (
          <div key={note.id} className="card">
            <div className="card-body">
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllNotes;
