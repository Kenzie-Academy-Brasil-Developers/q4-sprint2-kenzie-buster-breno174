import { Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/user.repository";
import { User } from "../entities/User";

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundUser: User = await UserRepository.findOne({
    email: (req.validated as User).email,
  });

  if (foundUser) {
    res.status(409).json({ message: "Email already exist!" });
  }

  return next();
};

export default verifyUserExists;
