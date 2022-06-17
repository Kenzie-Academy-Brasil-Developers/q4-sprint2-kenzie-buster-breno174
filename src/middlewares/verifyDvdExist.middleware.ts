import { Request, Response, NextFunction } from "express";
import { Dvds } from "../entities";
import { DvdsRepository } from "../repositories";

const verifyDvdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundDvd = await DvdsRepository.findOne(req.params);

  if (!foundDvd) {
    res.status(404).json({ message: "dvd not found" });
  }

  req.validated = foundDvd as Dvds;

  return next();
};

export default verifyDvdExists;
