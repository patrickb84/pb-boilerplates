const postCollection = () => {
  let collection = JSON.parse(localStorage.getItem('posts'));
  return collection ?? [];
};

const generateId = () => {
  try {
    return Math.max(postCollection().map(item => item.id)) + 1;
  } catch (error) {
    console.error(error);
    return 1;
  }
};

const PostModel = () => {};

PostModel.create = post => {
  post.id = generateId();
  let posts = [...postCollection(), post];
  localStorage.setItem('posts', JSON.stringify(posts));
  return post.id;
};

PostModel.selectAll = () => {
  return postCollection();
};

export default PostModel;
