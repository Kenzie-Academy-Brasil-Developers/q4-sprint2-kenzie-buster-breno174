import { Router } from "express";
import { dvdController, cartController } from "../controllers";
import { validateSchema, verifyDvdExists } from "../middlewares";
import { createDvdSchema } from "../schemas";

const dvdRouter = Router();

dvdRouter.post(
  "/dvds/register",
  validateSchema(createDvdSchema),
  dvdController.createDvd
);
dvdRouter.get("/dvds", dvdController.allDvds);
dvdRouter.post("/dvds/buy/:dvdId", verifyDvdExists, cartController.buydvd);

export default dvdRouter;
