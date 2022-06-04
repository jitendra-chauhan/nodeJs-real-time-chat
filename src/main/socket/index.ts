import logger from "../logger";
import { socketOps } from "../../connections";

async function sendEventToClient(client: any, data: any) {
  try {
    const socketClient: any = socketOps();

    logger.debug("SEND EVENT TO CLIENT: ", data);

    if (typeof client !== "string") client.emit("res", { data });
    else socketClient.to(client).emit("res", { data });
  } catch (error) {
    logger.error("sendEventToClient :: error :: ", error);
  }
}

async function sendEventToRoom(roomId: any, data: any) {
  const socketClient: any = socketOps();
  logger.debug("SEND EVENT TO ROOM : ", data);
  socketClient.to(roomId).emit("res", { data });
}

function addClientInRoom(socket: any, roomId: any) {
  if (socket.id !== "ROBOT") return socket.join(roomId);
}

function getSocketFromSocketId(socketId: any) {
  const socketClient: any = socketOps();
  return socketClient.sockets.sockets.get(socketId);
}

const exportObject = {
  sendEventToClient,
  sendEventToRoom,
  addClientInRoom,
  getSocketFromSocketId,
};

export = exportObject;
