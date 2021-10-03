import httpClient from '../http-client';

const getAllUsers = async (filters?: object) => {
  const product = (
    await httpClient.get('/users', {
      params: filters,
    })
  ).data;

  return product;
};

const getUser = async (productId: string) => {
  const product = (await httpClient.get(`/todos/${productId}`)).data;

  return product;
};

export { getUser, getAllUsers };
