/* eslint-disable no-return-assign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { getSocket } from './sockets';

const messages = document.getElementById('jsMessages');
const sendMsg = document.getElementById('jsSendMsg');

const appendMessage = (text, nickname) => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="author ${nickname ? 'out' : 'self'}">${
    nickname ? nickname : 'You'
  }:</span> ${text}`;
  messages.appendChild(li);
};

const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector('input');
  const { value } = input;
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = '';
  appendMessage(value);
};

if (sendMsg) {
  sendMsg.addEventListener('submit', handleSendMsg);
}

export const handleNewMessage = ({ message, nickname }) => {
  appendMessage(message, nickname);
};

export const disableChat = () => (sendMsg.style.display = 'none');
export const enableChat = () => (sendMsg.style.display = 'flex');
