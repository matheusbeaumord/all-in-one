import httpClient from '../http-client';

const getPosts = async (userId?: number) => {
  const todos = (await httpClient.get(`/posts?userId=${userId}`)).data;

  return todos;
};

const addPost = async (newPost: object) => {
  const data = (
    await httpClient.post('/posts', {
      params: newPost,
    })
  ).data;

  return data;
};

const updatePost = async (postId: number, updatePost: object) => {
  const data = (
    await httpClient.put(`/posts/${postId}`, {
      params: updatePost,
    })
  ).data;

  return data;
};

const deletePost = async (postId: number) => {
  await httpClient.delete(`/posts/${postId}`);
};

export { getPosts, addPost, updatePost, deletePost };
