import logger from "../../logger";
import { sendMessage } from "../../chat";

function sendMsgHelper({ data }: any, socket: any) {
  console.log("==sendMsgHelper=> call <===");

  return sendMessage(data, socket).catch((e: any) => logger.error(e));
  // return true;
}

export = sendMsgHelper;
