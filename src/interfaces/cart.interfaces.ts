import { Carts } from "../entities";

interface ICartRepo {
  buycart: (cart: Partial<Carts>) => object;
}

export { ICartRepo };
