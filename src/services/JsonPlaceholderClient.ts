import axios from 'axios';

const JsonPlaceholderClient = () =>
  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

export default JsonPlaceholderClient;
