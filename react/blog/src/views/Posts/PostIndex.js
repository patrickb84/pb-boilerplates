import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostModel from '../../store/PostStore';

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(PostModel.selectAll());
  }, []);

  return (
    <div className='py-5'>
      <div className='container-fluid mt-3'>
        <h1>Posts</h1>
        <Link to='/addpost'>Add post</Link>
        <hr />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Post</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => {
              const { id, title, body } = post;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <div>
                      <div className='fw-bold'>{title}</div>
                      <small>{body}</small>
                    </div>
                  </td>
                  <td>
                    <Button variant='primary' size='sm'>
                      Edit
                    </Button>
                    <Button variant='danger' size='sm' className='ms-2'>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PostIndex;
