import { Request, Response } from "express";

class CartController {
  buydvd = async (req: Request, res: Response) => {
    try {
      console.log("-------------");
      console.log(req.validated);
      console.log("-------------");

      return res.status(200).json({ res: "response" });
    } catch (error) {
      console.log(error);
      return res.status(418).json({ error: "I`m a tea pot" });
    }
  };
}

export default new CartController();
