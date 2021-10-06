import httpClient from '../http-client';

const getAlbums = async (userId?: number) => {
  const todos = (await httpClient.get(`/posts?userId=${userId}`)).data;

  return todos;
};

const addAlbums = async (newPost: object) => {
  const data = (
    await httpClient.post('/posts', {
      params: newPost,
    })
  ).data;

  return data;
};

const updateAlbums = async (postId: number, updatePost: object) => {
  const data = (
    await httpClient.put(`/posts/${postId}`, {
      params: updatePost,
    })
  ).data;

  return data;
};

const deleteAlbums = async (postId: number) => {
  await httpClient.delete(`/posts/${postId}`);
};

export { getAlbums, addAlbums, updateAlbums, deleteAlbums };
