import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { User } from "../entities";
import UserRepository from "../repositories/user.repository";
import { serializedCreateUserSchema } from "../schemas/user/createUser.schema";
import { Ilogin } from "../interfaces/user.interfaces";
import userRepository from "../repositories/user.repository";
import * as dotenv from "dotenv";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

dotenv.config();

class UserService {
  loginUser = async ({ validated }: Request): Promise<Ilogin> => {
    const user: User = await userRepository.findOne({
      email: validated.email,
    });

    if (!user) {
      return { status: 401, message: { error: "Invalid credencials" } };
    }

    if (!(await user.comparePwd(validated.password))) {
      return { status: 401, message: { error: "Invalid credencials" } };
    }
    const token: string = sign({ ...user }, String(process.env.SECRET_KEY), {
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      status: 200,
      message: user,
    };
  };
  createUser = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    (validated as User).password = await hash((validated as User).password, 10);
    const user: User = await UserRepository.create(validated as User);

    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true,
    });
  };
}

export default new UserService();
