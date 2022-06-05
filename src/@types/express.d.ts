import { User } from "../entities";
import { Dvds } from "../entities";
declare global {
  namespace Express {
    interface Request {
      validated: User | Dvds[];
    }
  }
}
