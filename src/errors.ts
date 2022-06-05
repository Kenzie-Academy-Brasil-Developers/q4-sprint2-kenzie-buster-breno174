import { Response } from "express";

class ErrorDvdHandle {
  public status: number;
  public message: string | [object];

  constructor(statusCode: number, messageRes: string | [object]) {
    this.status = statusCode;
    this.message = messageRes;
  }
}

const errorDvdHandle = (err: Error, res: Response) => {
  if (err instanceof ErrorDvdHandle) {
    return res.status(err.status).json({ message: err.message });
  }

  console.error(err);

  return res.status(500).json({ message: "Internal server error." });
};

export { ErrorDvdHandle, errorDvdHandle };
