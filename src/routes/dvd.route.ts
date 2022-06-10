import { Router } from "express";
import dvdController from "../controllers/dvd.controller";
import { validateSchema } from "../middlewares";
import { createDvdSchema } from "../schemas";

const dvdRouter = Router();

dvdRouter.post(
  "/dvds/register",
  validateSchema(createDvdSchema),
  dvdController.createDvd
);
dvdRouter.get("/dvds", dvdController.allDvds);

export default dvdRouter;
