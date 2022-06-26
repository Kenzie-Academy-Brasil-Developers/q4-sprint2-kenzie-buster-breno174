import { Router } from "express";
import {
  validateSchema,
  validateToken,
  verifyUserExists,
  validateIsAdimMiddleware,
} from "../middlewares";
import { userController } from "../controllers";
import { createUserSchema, loginUserSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/user/register",
  validateSchema(createUserSchema),
  validateToken,
  validateIsAdimMiddleware,
  verifyUserExists,
  userController.createuser
);
userRouter.post(
  "/users/login",
  validateSchema(loginUserSchema),
  userController.loginUser
);

export default userRouter;
