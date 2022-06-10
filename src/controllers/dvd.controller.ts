import { Request, Response } from "express";
import dvdService from "../services/dvd.service";

class DvdController {
  createDvd = async (req: Request, res: Response) => {
    try {
      const dvds = await dvdService.createDvd(req);

      return res.status(201).json(dvds);
    } catch (err) {
      console.log(err);
      return res
        .status(418)
        .json({ message: "error ao criar dvd no controller" });
    }
  };
  allDvds = async (req: Request, res: Response) => {
    try {
      const getDvds = await dvdService.allDvds();
      return res.status(201).json(getDvds);
    } catch (err) {
      console.log(err);
      return res
        .status(418)
        .json({ message: "error ao chamar os dvds no controller" });
    }
  };
}

export default new DvdController();
