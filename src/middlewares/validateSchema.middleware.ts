import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validateSchema =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.validated = validated;

      return next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "error no schema" });
    }
  };

export default validateSchema;
