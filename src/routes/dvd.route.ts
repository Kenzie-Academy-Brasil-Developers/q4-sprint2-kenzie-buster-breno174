import { Router } from "express";
import { dvdController, cartController } from "../controllers";
import {
  validateIsAdimMiddleware,
  validateSchema,
  validateToken,
  verifyDvdExists,
} from "../middlewares";
import { createDvdSchema } from "../schemas";

const dvdRouter = Router();

dvdRouter.post(
  "/dvds/register",
  validateSchema(createDvdSchema),
  validateToken,
  validateIsAdimMiddleware,
  dvdController.createDvd
);
dvdRouter.get("/dvds", dvdController.allDvds);
dvdRouter.post(
  "/dvds/buy/:dvdId",
  validateToken,
  verifyDvdExists,
  cartController.buydvd
);
dvdRouter.post("/carts/pay", validateToken, cartController.payDvds);

export default dvdRouter;
