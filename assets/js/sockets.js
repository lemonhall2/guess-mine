/* eslint-disable import/no-cycle */
import { handleNewUser, handleDisconnected } from './notifications';
import { handleNewMessage } from './chat';
import { handleBeganPath, handleStrokedPath, handleFilled } from './paint';
import {
  handlePlayerUpdate,
  handleGameStarted,
  handlePainterNotif,
  handleGameEnded,
  handleGameStarting,
} from './players';

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
  aSocket.on(events.newMsg, handleNewMessage);
  aSocket.on(events.beganPath, handleBeganPath);
  aSocket.on(events.strokedPath, handleStrokedPath);
  aSocket.on(events.filled, handleFilled);
  aSocket.on(events.playerUpdate, handlePlayerUpdate);
  aSocket.on(events.gameStarted, handleGameStarted);
  aSocket.on(events.painterNotif, handlePainterNotif);
  aSocket.on(events.gameEnded, handleGameEnded);
  aSocket.on(events.gameStarting, handleGameStarting);
};
