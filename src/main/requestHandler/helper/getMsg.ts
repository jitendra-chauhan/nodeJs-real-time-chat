import logger from "../../logger";
import { getMessage } from "../../chat";

function getMsgHelper({ data }: any, socket: any) {
  console.log("==getMsgHelper=> call <===");
  return getMessage(data, socket).catch((e: any) => logger.error(e));
}

export = getMsgHelper;
