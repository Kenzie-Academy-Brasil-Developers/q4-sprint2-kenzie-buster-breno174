import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IDvdRepo } from "../interfaces/dvd.interfaces";
import { Dvds } from "../entities";

class DvdsRepository implements IDvdRepo {
  private ormRepo: Repository<Dvds>;

  constructor() {
    const ormRepo = AppDataSource.getRepository(Dvds);
  }
  create = async (dvd: Partial<Dvds>) => await this.ormRepo.save(dvd);
  all = async () => await this.ormRepo.find();
}

export default new DvdsRepository();
