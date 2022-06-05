import { Dvds } from "../entities";

interface IDvdRepo {
  create: (dvd: Partial<Dvds>) => Promise<Dvds>;
  all: () => void;
}

export { IDvdRepo };
