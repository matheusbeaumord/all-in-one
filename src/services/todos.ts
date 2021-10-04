import httpClient from '../http-client';

const getTodo = async (productId?: number) => {
  const product = (await httpClient.get(`/todos?userId=${productId}`)).data;

  return product;
};

export { getTodo };
