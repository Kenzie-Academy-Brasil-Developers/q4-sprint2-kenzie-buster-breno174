import { Stock } from "../entities";

interface IStockRepo {
  all: () => void;
  findOne: (payload: object) => Promise<Stock>;
  create: (payload: IStockCreate) => Promise<Stock>;
}

interface IStockCreate {
  quantity: number;
  price: number;
}

export { IStockRepo, IStockCreate };
