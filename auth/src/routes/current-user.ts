import express from "express";

import { currentUser } from "@gjtickets/common";

const router = express.Router();

console.log(currentUser);

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
