import User from '../entities/User';

export default {
  registerUser: async (name, email, { usersRepository }) => {
    const user = new User(undefined, name, email);
    return usersRepository.persist(user);
  },
  find: ({ usersRepository }) => {
    return usersRepository.find();
  }
};