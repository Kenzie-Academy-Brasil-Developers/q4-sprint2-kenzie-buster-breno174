import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { User } from "../entities";
import { ErrorDvdHandle } from "../errors";
import * as dotenv from "dotenv";
dotenv.config();

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new ErrorDvdHandle(400, "Missing authorization token." as string);
  }

  return verify(
    token,
    process.env.SECRET_KEY,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      if (err) {
        throw new ErrorDvdHandle(401, err.message);
      }

      req.decoded = decoded as User;

      return next();
    }
  );
};

export default validateToken;
