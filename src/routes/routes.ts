import { Express } from "express";
import app from "../index";
import userRouter from "./user.route";
const regirtesrRotes = (app: Express): void => {
  app.use("/api", userRouter);
};

export default regirtesrRotes;
