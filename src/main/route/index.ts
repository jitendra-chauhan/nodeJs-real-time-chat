const express = require("express");
import { login, signUp } from "../userProfile";

const router = express.Router();

// router.post("/name", (req: any, res: any) => {
//   console.log("=====> call name <====");
//   const data = {
//     name: "my",
//   };
//   res.send(data);
// });

router.post("/signUp", signUp);
router.post("/login", login);

const exportObject = {
  router,
};

export = exportObject;
