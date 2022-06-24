import { Request, Response } from "express";
import cartService from "../services/cart.service";
import { ErrorDvdHandle } from "../errors";

class CartController {
  buydvd = async (req: Request, res: Response) => {
    try {
      // console.log("-------------");
      // console.log(req.validated);
      // console.log("-------------");

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
}

export default new CartController();
