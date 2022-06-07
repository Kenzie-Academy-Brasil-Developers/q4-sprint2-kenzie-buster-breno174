import { Stock } from "../entities";

interface IStockRepo {
  all: () => void;
  findOne: (payload: object) => Promise<Stock>;
}

export { IStockRepo };
