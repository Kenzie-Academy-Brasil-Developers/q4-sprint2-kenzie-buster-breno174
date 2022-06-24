import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { errorDvdHandle } from "./errors";
import regirtesrRotes from "./routes/routes";

const app = express();
app.use(express.json());

regirtesrRotes(app);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  return errorDvdHandle(err, res);
});

export default app;
