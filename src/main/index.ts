require("./eventHandlers");

import logger from "./logger";
import DB from "./db";
import requestHandler from "./requestHandler";
// import { router } from "./route";

const exportObject = {
  logger,
  DB,
  requestHandler,
  // router,
};
export = exportObject;
