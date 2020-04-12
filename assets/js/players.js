import { disableCanvase, hideControls, showControls, enableCanvas, resetCanvas } from './paint';
import { disableChat, enableChat } from './chat';

/* eslint-disable import/prefer-default-export */
const board = document.getElementById('jsPBoard');
const notifs = document.getElementById('jsNotifs');

const addPlayers = (players) => {
  board.innerHTML = '';
  players.forEach((player) => {
    const playerElement = document.createElement('span');
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = '';
  notifs.innerText = text;
};

export const handleGameStarted = () => {
  setNotifs('');
  disableCanvase();
  hideControls();
  enableChat();
};
export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handlePainterNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  setNotifs(`You are the Painter, paint: ${word}`);
};
export const handleGameEnded = () => {
  setNotifs('Game ended');
  disableCanvase();
  hideControls();
  resetCanvas();
};
export const handleGameStarting = () => {
  setNotifs('Game will start soon');
};
