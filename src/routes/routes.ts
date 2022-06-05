import { Express } from "express";
import app from "../index";
import userRouter from "./user.route";
import dvdRouter from "./dvd.route";

const regirtesrRotes = (app: Express): void => {
  app.use("/api", userRouter);
  app.use("/api", dvdRouter);
};

export default regirtesrRotes;
