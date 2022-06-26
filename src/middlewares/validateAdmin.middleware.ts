import { Request, Response, NextFunction } from "express";

const validateIsAdimMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const user = request.decoded;
  if (user.isAdm !== true) {
    return response
      .status(400)
      .json({ message: "this user is not ADM, he cant use this route" });
  }

  return next();
};

export default validateIsAdimMiddleware;
