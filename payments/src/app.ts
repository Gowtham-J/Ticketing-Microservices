import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@gjtickets/common";
import { createChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
<<<<<<< HEAD
    // secure: process.env.NODE_ENV !== "test",
    secure: false,
=======
    secure: false,
    // secure: process.env.NODE_ENV !== "test",
>>>>>>> 6b795b306db0cc10cafd9bf1e06283cf4b3f5063
  })
);
app.use(currentUser);

app.use(createChargeRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
