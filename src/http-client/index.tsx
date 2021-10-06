import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpClient;