import { EVENTS } from "../../constants";
import DB from "../db";
import eventEmitter from "../eventEmitter";
import { createRoomId } from "../utile";

async function userList(eventData: any, socket: any) {
  try {
    const { myId } = eventData;
    console.log("====> userList <====");

    const data = await DB.UserProfile.getUsers({});

    for await (const user of data) {
      const roomId = await createRoomId(myId, user._id);
      eventEmitter.emit(EVENTS.ADD_TO_ROOM, { socket, data: { roomId } });
      console.log("=====> room Id <====", roomId);
    }
    let sendData = {
      flag: false,
      status: "sussces",
      data: {},
    };
    if (data.length > 0) {
      sendData.flag = true;
      sendData.data = data;
    }

    const sendPayload = {
      socket,
      data: sendData,
    };

    console.log("==> sendPayload <===", sendData);

    eventEmitter.emit(EVENTS.USER_LIST, sendPayload);
  } catch (error) {
    console.log("userList : error :: ", error);
  }
}

export = userList;
