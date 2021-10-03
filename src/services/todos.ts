import httpClient from '../http-client';
import Todos from '../models/todos';

const getAllTodos = async (filters?: object) => {
  const product = (
    await httpClient.get('/todos', {
      params: filters,
    })
  ).data;

  return product;
};

const getTodo = async (productId?: number) => {
  const product = (await httpClient.get(`/todos?userId=${productId}`)).data;

  return product;
};

export { getTodo, getAllTodos };
