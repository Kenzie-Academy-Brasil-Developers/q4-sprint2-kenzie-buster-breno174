import { Dvds } from "../entities";
import { AssertsShape } from "yup/lib/object";
import { Request } from "express";
import { ErrorDvdHandle } from "../errors";
import { IDvdList } from "../interfaces/dvd.interfaces";
import { Stock } from "../entities";
import { DvdsRepository, StockRepository } from "../repositories";
import dvdRepository from "../repositories/dvd.repository";

class DvdService {
  createDvd = async ({ validated }: Request) => {
    try {
      const newDvds = [];

      for (let { name, duration, quantity, price } of (validated as IDvdList)
        .dvd) {
        let getDvd = await DvdsRepository.findOne({ name, duration });

        if (!getDvd) {
          const newstock: Stock = await StockRepository.create({
            quantity,
            price,
          });

          const newDvd = await DvdsRepository.create({
            name,
            duration,
            stock: newstock,
          });

          newDvds.push(newDvd);
        }
      }

      return newDvds;
    } catch (err) {
      console.log(err);
      console.log("entrou no error do service");
      throw new ErrorDvdHandle(418, "I`m a tea pot!");
    }
  };

  allDvds = async () => {
    return await dvdRepository.all();
  };
}

export default new DvdService();
