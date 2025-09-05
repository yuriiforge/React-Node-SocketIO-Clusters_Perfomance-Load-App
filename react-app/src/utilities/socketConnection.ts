import io from 'socket.io-client';

const options = {
  auth: { token: '23jrtiheriufyqwidsf' },
};

const socket = io(
  'https://react-node-socketio-clusters-perfomance.onrender.com',
  options
);

// socket.on('connect', () => {
//   console.log('Connected with id: ', socket.id);
// });

export default socket;
