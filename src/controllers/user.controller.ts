import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
  loginUser = async (req: Request, res: Response) => {
    const { status, message } = await userService.loginUser(req);
    return res.status(status).json(message);
  };
  createuser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req);

    return res.status(201).json(user);
  };
}

export default new UserController();
