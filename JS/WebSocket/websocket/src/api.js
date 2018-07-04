import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

export const sendMessage = (msg)=>{
  socket.emit('Send Message',msg)
}
socket.on('Send Message')