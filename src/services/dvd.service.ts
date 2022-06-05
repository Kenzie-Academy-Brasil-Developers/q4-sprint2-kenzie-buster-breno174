import { Dvds } from "../entities";
import DvdsRepository from "../repositories/dvd.repository";
import { AssertsShape } from "yup/lib/object";
import { Request } from "express";
import { ErrorDvdHandle } from "../errors";

class DvdService {
  createDvd = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    try {
      console.log(validated);
      //const newDvds = (validated as Dvds[]).map(
      //  async (dvd) => await DvdsRepository.create(dvd)
      //);
      //console.log("passou nos services", `\n${newDvds}`);
      //return newDvds;
      return [{ duration: "2h", quantity: "2", name: "titanic" }];
    } catch (err) {
      console.log(err);
      console.log("entrou no error do service");
      throw new ErrorDvdHandle(418, "I`m a tea pot!");
    }
  };
}

export default new DvdService();
