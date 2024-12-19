import JsonPlaceholderClient from './JsonPlaceholderClient';

const UsersService = {
  get: () => JsonPlaceholderClient().get('/users'),
};

export default UsersService;
