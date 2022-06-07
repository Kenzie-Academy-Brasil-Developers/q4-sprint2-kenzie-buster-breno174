import { Dvds } from "../entities";
import { AssertsShape } from "yup/lib/object";
import { Request } from "express";
import { ErrorDvdHandle } from "../errors";
import { IDvdList } from "../interfaces/dvd.interfaces";
import { DvdsRepository } from "../repositories";

class DvdService {
  createDvd = async ({ validated }: Request) => {
    try {
      const newDvds = [];
      for (let { name, duration } of (validated as IDvdList).dvd) {
        newDvds.push({ name, duration });
      }
      const returnDvds = await DvdsRepository.saveMany(
        newDvds as Partial<Dvds[]>
      );

      return returnDvds;
    } catch (err) {
      console.log(err);
      console.log("entrou no error do service");
      throw new ErrorDvdHandle(418, "I`m a tea pot!");
    }
  };
}

export default new DvdService();
