import httpServer from "./http";
import { getConfig } from "./config";
import socketOps from "./socket";
import mongoOps from "./mongo";

const exportObject = {
  httpServer,
  getConfig,
  socketOps,
  mongoOps,
};

export = exportObject;
