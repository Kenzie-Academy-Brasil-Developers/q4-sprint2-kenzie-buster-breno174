import { Request } from "express";
import { Carts, Dvds } from "../entities";
import { CartRepository } from "../repositories";
import { ErrorDvdHandle } from "../errors";

class CartService {
  buyCart = async (request: Request) => {
    try {
      const dvd = request.validated as Dvds;
      const user = request.decoded;
      const { quantity } = request.body;

      if (quantity > dvd.stock.quantity) {
        // throw new ErrorDvdHandle(400, "quantidade ultrapassada");
        return {
          status: 400,
          message: {
            error: `quantidade em stock: ${dvd.stock.quantity}, quantidade excedente pedida ${quantity}`,
          },
        };
      }
      // console.log(dvd, "\n", user, "\n", "quantidade: ", quantity);

      const newCart = new Carts();
      newCart.paid = false;
      newCart.user = user;
      newCart.total = dvd.stock.price * quantity;
      newCart.dvds = dvd;
      console.log(newCart);

      await CartRepository.buycart(newCart);

      return { status: 200, message: newCart };
    } catch (error) {
      console.log("\n");
      console.log(error);
    }
  };
}

export default new CartService();
