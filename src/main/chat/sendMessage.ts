import { EVENTS } from "../../constants";
import DB from "../db";
import eventEmitter from "../eventEmitter";
import { createRoomId } from "../utile";

async function sendMessage(eventData: any, socket: any) {
  try {
    // to: id,
    //     from: userId,
    //     msg: param,
    console.log("====> sendMessage <====", eventData);
    const roomId = await createRoomId(eventData.from, eventData.to);
    const data = await DB.UserChat.sendMessage(eventData);
    // const dataList = await DB.UserChat.getMessages({});

    console.log("====> USER_CHAT <====", data);

    let sendData = {
      flag: true,
      status: "sussces",
      data: data,
    };
    // if (data.length > 0) {
    //   sendData.flag = true;
    //   sendData.data = data;
    // }

    const sendPayload = {
      socket,
      roomId,
      data: sendData,
    };

    console.log("==> sendPayload <===", sendData);

    eventEmitter.emit(EVENTS.USER_CHAT, sendPayload);
  } catch (error) {
    console.log("sendMessage : error :: ", error);
  }
}

export = sendMessage;
