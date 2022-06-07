import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IDvdRepo } from "../interfaces/dvd.interfaces";
import { Dvds } from "../entities";
import { IDvdOwner } from "../interfaces/dvd.interfaces";

class DvdsRepository implements IDvdRepo {
  private ormRepo: Repository<Dvds>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Dvds);
  }

  create = async (dvd: Partial<Dvds>) => await this.ormRepo.save(dvd);

  newcreate = async (dvd: object) => await this.ormRepo.create(dvd);

  all = async () => await this.ormRepo.find();

  findOne = async (payload: object) => {
    return (await this.ormRepo.findOneBy({ ...payload })) as Dvds;
  };

  saveMany = async (dvds: Partial<Dvds[]>) => {
    const insertedDvds = await this.ormRepo
      .createQueryBuilder()
      .insert()
      .values(dvds as Partial<Dvds>)
      .execute();

    const returnDvds: Dvds[] = [];

    for (let { name } of insertedDvds.generatedMaps) {
      returnDvds.push(await this.findOne({ name }));
    }

    return returnDvds;
  };
}

export default new DvdsRepository();
