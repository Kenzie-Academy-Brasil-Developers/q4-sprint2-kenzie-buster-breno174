import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Carts } from "../entities";
import { ICartRepo } from "../interfaces/cart.interfaces";

class CartRepository implements ICartRepo {
  private ormRepo: Repository<Carts>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Carts);
  }

  buycart = async (cart: Partial<Carts>) => await this.ormRepo.save(cart);
}

export default new CartRepository();
