import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Stock } from "../entities";
import { IStockCreate, IStockRepo } from "../interfaces/stock.interface";

class StockRepository implements IStockRepo {
  private ormRepo: Repository<Stock>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Stock);
  }

  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return (await this.ormRepo.findOneBy({ ...payload })) as Stock;
  };
  create = async (payload: IStockCreate) => await this.ormRepo.save(payload);
  save = async (stock: Partial<Stock>) => await this.ormRepo.save(stock);
}

export default new StockRepository();
