import { Dvds } from "../entities";
import { AssertsShape } from "yup/lib/object";
import { Request } from "express";
import { ErrorDvdHandle } from "../errors";
import { IDvdList } from "../interfaces/dvd.interfaces";
import { DvdsRepository, StockRepository } from "../repositories";
import dvdRepository from "../repositories/dvd.repository";

class DvdService {
  createDvd = async ({ validated }: Request) => {
    try {
      //pegar o (validated as IDvdList).dvd e aplicar um loop for para add ao stock
      // validar se o stock já não existe antes => usar um if e else vai ajudar
      //  OBS: tratar para casos de dois itens (dvd) com o mesmo nome
      // usar if/else ou try/catch
      // if - procurar se stock já existe
      //    adiciona ao stock daquele ID
      // else - cria o Stock, faz await
      //    adiciona posteriormente
      // tenho que voltar o ID do stock que o dvd foi adicionado
      const newDvds = [];
      for (let { name, duration } of (validated as IDvdList).dvd) {
        let getDvd = await DvdsRepository.findOne({ name, duration });
        console.log("\n", getDvd, "\ndvd achado antes de verificar o stock\n");
        if (!getDvd) {
          console.log("\naaaaaaaaaaaaaaaaaaaaa\n");
          newDvds.push({ name, duration });
        }
        try {
          console.log("--------------");
          console.log(getDvd.stock);
          console.log("--------------");
        } catch (err) {
          console.log(err);
          console.log("\nNão pode fazer esse try\n");
        }
      }
      const returnDvds = await DvdsRepository.saveMany(
        newDvds as Partial<Dvds[]>
      );

      const finalList = [];
      for (let { name, duration, price, quantity } of (validated as IDvdList)
        .dvd) {
        let getDvd = await DvdsRepository.findOne({ name, duration });
        console.log("\n", getDvd, "\ndvd achado do stock\n");

        if (getDvd.stock) {
          console.log("TEM NO STOCK");
        } else {
          let newstock = await StockRepository.create({
            price: price,
            quantity: quantity,
          });
          getDvd.stock = newstock;
          console.log("NÃO TEM NO STOCK");
        }
        try {
          await dvdRepository.create(getDvd);
        } catch (err) {
          console.log("nao precisa criar dnv");
        }

        finalList.push(getDvd);
      }

      return finalList;
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
