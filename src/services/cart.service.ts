import { Request } from "express";
import { Carts } from "../entities";
import { CartRepository } from "../repositories";

class CartService {
  buyCart = async (request: Request) => {
    try {
      const dvd = request.validated;
      const cart = await CartRepository.buycart(request.body);

      return cart;
    } catch (error) {
      console.log("\n");
      console.log(error);
    }
  };
}

export default new CartService();
