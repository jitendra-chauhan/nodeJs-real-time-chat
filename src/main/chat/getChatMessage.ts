import { EVENTS } from "../../constants";
import DB from "../db";
import eventEmitter from "../eventEmitter";

async function getMessage(eventData: any, socket: any) {
  try {
    const { userId, myId, type } = eventData;

    let query = {};
    if (type === "me") {
      query = {
        $and: [{ to: userId }, { from: userId }],
      };
    } else {
      query = {
        $and: [
          {
            $or: [{ to: userId }, { from: userId }],
          },
          {
            $or: [{ to: myId }, { from: myId }],
          },
        ],
      };
    }
    const dataList = await DB.UserChat.getMessages(query);

    console.log("====> getMessage <====", dataList);

    let sendData = {
      flag: true,
      status: "sussces",
      data: [],
    };
    if (dataList.length > 0) {
      sendData.flag = true;
      sendData.data = dataList;
    }

    const sendPayload = {
      socket,
      data: sendData,
    };

    console.log("=getMessage=> sendPayload <===", sendData);

    eventEmitter.emit(EVENTS.GET_CHAT, sendPayload);
  } catch (error) {
    console.log("getMessage : error :: ", error);
  }
}

export = getMessage;
