import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PostModel from '../../store/PostStore';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const postArgs = {
      title,
      body,
    };
    PostModel.create(postArgs);
  };

  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='email'
          placeholder='title'
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          onChange={e => setBody(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default PostForm;
