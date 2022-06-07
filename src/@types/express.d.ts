import { User } from "../entities";
import { Dvds } from "../entities";
import { IDvdList } from "../interfaces/dvd.interfaces";
declare global {
  namespace Express {
    interface Request {
      validated: User | IDvdList;
    }
  }
}
