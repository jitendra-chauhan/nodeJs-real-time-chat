// import { signUpRequestIf } from "../../interface/signUpIf";
// import logger from "../../logger";
// import signUp from "../../signUp";

import logger from "../../logger";
import { userList } from "../../users";

function signUpHelper({ data }: any, socket: any) {
  console.log("==signUpHelper=> call <===");

  return userList(data, socket).catch((e: any) => logger.error(e));
  // return true;
}

export = signUpHelper;
