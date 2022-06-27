import { Request, Response } from "express";
import cartService from "../services/cart.service";
import { ErrorDvdHandle } from "../errors";

class CartController {
  buydvd = async (req: Request, res: Response) => {
    try {
      const { status, message } = await cartService.buyCart(req);

      return res.status(status).send(message);
    } catch (error) {
      if (error instanceof ErrorDvdHandle) {
        return res.status(error.status).json(error.message);
      }
      console.log(error, "veio daqui");
      return res.status(418).json({ error: "I`m a tea pot" });
    }
  };
  payDvds = async (req: Request, res: Response) => {
    try {
      const resposta = await cartService.payCart(req);

      return res.status(200).send(resposta);
    } catch (error) {
      console.log(error);
      return res.status(418).json({ error: "I`m a tea pot" });
    }
  };
}

export default new CartController();
