import io from 'socket.io-client';

const options = {
  auth: { token: '23jrtiheriufyqwidsf' },
};

const socket = io('http://localhost:3000', options);

// socket.on('connect', () => {
//   console.log('Connected with id: ', socket.id);
// });

export default socket;
