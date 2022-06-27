import { Request } from "express";
import { Carts, Dvds } from "../entities";
import { CartRepository, StockRepository } from "../repositories";
import { ErrorDvdHandle } from "../errors";
import dvdRepository from "../repositories/dvd.repository";

class CartService {
  buyCart = async (request: Request) => {
    try {
      const dvd = request.validated as Dvds;
      const user = request.decoded;
      const { quantity } = request.body;

      if (Number(quantity) > dvd.stock.quantity) {
        return {
          status: 400,
          message: {
            error: `quantidade em stock: ${dvd.stock.quantity}, quantidade excedente pedida ${quantity}`,
          },
        };
      }
      const allcarts = await CartRepository.allcarts();
      const findCartDvd = allcarts.find(
        (cart) => cart.dvds.dvdId === dvd.dvdId
      );
      const findCartUser = allcarts.find(
        (cart) => cart.user.userUuid === user.userUuid
      );
      console.log(findCartDvd);
      console.log("-----------");
      console.log(findCartUser);

      if (!findCartDvd && !findCartUser) {
        return {
          status: 400,
          message: { error: "this user already have a cart to this Dvd" },
        };
      }

      const newCart = new Carts();
      newCart.paid = false;
      newCart.user = user;
      newCart.total = Math.ceil(dvd.stock.price * quantity);
      newCart.dvds = dvd;
      // console.log(newCart);

      const respostaCartCreate = await CartRepository.buycart(newCart);
      // console.log(respostaCartCreate);

      return { status: 200, message: newCart };
    } catch (error) {
      console.log("\n");
      console.log(error);
    }
  };
  payCart = async (request: Request) => {
    const user = request.decoded;
    console.log("--------------");
    console.log(user);
    console.log("--------------");
    const allCarts = await CartRepository.allcarts();
    const userCart = allCarts.find(
      (cart) => cart.user.userUuid === user.userUuid
    );

    console.log(userCart);
    try {
      await CartRepository.updatecart(userCart);
      const alterStock = await StockRepository.findOne(userCart.dvds.stock);
      console.log(alterStock);
    } catch (error) {
      console.log("\nUm error ao tentar implementar um upgrade");
    }

    return { message: "sim" };
  };
}

export default new CartService();
