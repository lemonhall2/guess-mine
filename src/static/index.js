// eslint-disable-next-line no-undef
const socket = io('/');
// socket.on('hello', () => {
//   console.log('Somebody joined');
// });

// setTimeout(() => socket.emit('helloGuys'), 3000);

function sendMessage(message) {
  socket.emit('newMessage', { message });
  console.log(`You: ${message}`);
}

function handleMessageNotif(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}

function setNickname(nickname) {
  socket.emit('setNickname', { nickname });
}

socket.on('messageNotif', handleMessageNotif);
