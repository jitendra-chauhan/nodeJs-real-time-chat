import { EVENTS } from "../../constants";
import logger from "../logger";
import { signUpHelper, sendMsgHelper, getMsgHelper } from "./helper";

async function requestHandler(socket: any, body: any) {
  if (!socket) {
    logger.error(new Error("socket instance not found"));
  }

  /* +-------------------------------------------------------------------+
        desc: function to handle all event processes
        i/p: request = {en: `event name`, data: `data`}
    +-------------------------------------------------------------------+ */

  const data = body;
  try {
    if (typeof body.data == "undefined" && typeof body.en == "undefined") {
      throw new Error("Data not valid!");
    }

    if (!socket) {
      throw new Error("socket instance not found");
    }

    logger.info("event ::", body.en, data);
    switch (body.en) {
      case EVENTS.HEART_BEAT:
        socket.emit("res", { data: "Done" });
        break;
      case EVENTS.USER_LIST:
        await signUpHelper(body, socket);
        break;
      case EVENTS.USER_CHAT:
        await sendMsgHelper(body, socket);
        break;
      case EVENTS.GET_CHAT:
        await getMsgHelper(body, socket);
        break;
      default:
        break;
    }
  } catch (error) {
    logger.error("requestHandler : error :: ", body.en, error);
  }
}

export = requestHandler;
