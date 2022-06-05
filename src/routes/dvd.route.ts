import { Router } from "express";
import dvdController from "../controllers/dvd.controller";
import { validateSchema } from "../middlewares";
import { createDvdSchema } from "../schemas";

const dvdRouter = Router();

dvdRouter.post(
  "/dvd/register",
  validateSchema(createDvdSchema),
  dvdController.createDvd
);

export default dvdRouter;
