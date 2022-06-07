import { Dvds } from "../entities";

interface IDvdRepo {
  create: (dvd: Partial<Dvds>) => Promise<Dvds>;
  all: () => void;
  saveMany: (dvds: Partial<Dvds[]>) => Promise<Dvds[]>;
  findOne: (payload: object) => Promise<Dvds>;
  newcreate: (dvd: Partial<Dvds>) => Promise<Dvds>;
}

interface IDvdOwner {
  name: string;
  duration: string;
  quantity: number;
  price: number;
}
interface IDvdList {
  dvd: IDvdOwner[];
}

export { IDvdRepo, IDvdList, IDvdOwner };
