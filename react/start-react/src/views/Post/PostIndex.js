import { useState } from 'react';
import PostForm from './Post.Form';

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className='mt-5'>
      <div className='container-fluid py-4'>
        <h1 className='display-4'>Posts</h1>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <h2>Index</h2>
            {posts.length > 0 && <div>Posts</div>}
          </div>
          <div className='col-md-6'>
            <h2>Form</h2>
            <PostForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostIndex;
