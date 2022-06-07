import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Stock } from "../entities";
import { IStockRepo } from "../interfaces/stock.interface";

class StockRepository implements IStockRepo {
  private ormRepo: Repository<Stock>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Stock);
  }

  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return (await this.ormRepo.findOneBy({ ...payload })) as Stock;
  };
}

export default new StockRepository();
