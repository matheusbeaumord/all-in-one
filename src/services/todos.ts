import httpClient from '../http-client';

const getTodo = async (taskId?: number) => {
  const todos = (await httpClient.get(`/todos?userId=${taskId}`)).data;

  return todos;
};

const addTodo = async (newTask: object) => {
    const data = (await httpClient.post('/users', {
      params: newTask,
    })).data

    return data
};

const updateTodo = async (taskId: number, updateTask: object) => {
  const data = (await httpClient.put(`/todos/${taskId}`, {
    params: updateTask,
  })).data;

  return data;
};

const deleteTodo = async (taskId: number) => {
  await httpClient.delete(`/todos/${taskId}`);
};

export { getTodo,  addTodo, updateTodo, deleteTodo};
