import eventEmitter from "../eventEmitter";
import { EVENTS } from "../../constants";
import { addClientInRoom, sendEventToClient, sendEventToRoom } from "../socket";

function userListEvent(payload: any) {
  const { socket, data } = payload;
  const responseData = {
    en: EVENTS.USER_LIST,
    data,
  };
  sendEventToClient(socket, responseData);
}
eventEmitter.on(EVENTS.USER_LIST, userListEvent);

function getChatEvent(payload: any) {
  const { socket, data } = payload;
  const responseData = {
    en: EVENTS.GET_CHAT,
    data,
  };
  sendEventToClient(socket, responseData);
}
eventEmitter.on(EVENTS.GET_CHAT, getChatEvent);

function sendChatEvent(payload: any) {
  const { socket, data, roomId } = payload;
  const responseData = {
    en: EVENTS.USER_CHAT,
    data,
  };
  sendEventToRoom(roomId, responseData);
}
eventEmitter.on(EVENTS.USER_CHAT, sendChatEvent);

function addPlayInRoomEvent(payload: any) {
  const { socket, data } = payload;
  addClientInRoom(socket, data.roomId);
}
eventEmitter.on(EVENTS.ADD_TO_ROOM, addPlayInRoomEvent);

// async function getTableInfoEvent(payload: any) {
//   const { socket, data } = payload;
//   const responseData = {
//     en: EVENTS.GET_TABLE_INFO_SOCKET_EVENT,
//     data,
//   };
//   await sendEventToClient(socket, responseData);
// }

// eventEmitter.on(EVENTS.GET_TABLE_INFO_SOCKET_EVENT, getTableInfoEvent);

// function joinTableEvent(payload: any) {
//   const { tableId, data } = payload;
//   const responseData = {
//     en: EVENTS.JOIN_TABLE_SOCKET_EVENT,
//     data,
//   };
//   sendEventToRoom(tableId, responseData);
// }

// eventEmitter.on(EVENTS.JOIN_TABLE_SOCKET_EVENT, joinTableEvent);

// function gameStartEvent(payload: any) {
//   const { tableId, data } = payload;
//   const responseData = {
//     en: EVENTS.GAME_START_SOCKET_EVENT,
//     data,
//   };
//   sendEventToRoom(tableId, responseData);
// }
// eventEmitter.on(EVENTS.GAME_START_SOCKET_EVENT, gameStartEvent);

// function startTurnEvent(payload: any) {
//   const { tableId, data } = payload;
//   const responseData = {
//     en: EVENTS.START_TURN_SOCKET_EVENT,
//     data,
//   };
//   sendEventToRoom(tableId, responseData);
// }
// eventEmitter.on(EVENTS.START_TURN_SOCKET_EVENT, startTurnEvent);

// function showTakeTurnEvent(payload: any) {
//   const { tableId, data } = payload;
//   const responseData = {
//     en: EVENTS.SHOW_TAKE_TURN_SOCKET_EVENT,
//     data,
//   };
//   sendEventToRoom(tableId, responseData);
// }

// eventEmitter.on(EVENTS.SHOW_TAKE_TURN_SOCKET_EVENT, showTakeTurnEvent);

// function winnerEvent(payload: any) {
//   const { tableId, data } = payload;
//   const responseData = {
//     en: EVENTS.WINNER_SOCKET_EVENT,
//     data,
//   };
//   sendEventToRoom(tableId, responseData);
// }

// eventEmitter.on(EVENTS.WINNER_SOCKET_EVENT, winnerEvent);
