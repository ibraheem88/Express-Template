"use strict";

import express from 'express'
import user from "./user.js";
import auth from "./auth.js";
const router = express.Router();

router.use("/user", user);
router.use("/auth", auth);


export default router;