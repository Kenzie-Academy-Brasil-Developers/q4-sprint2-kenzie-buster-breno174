import { User } from "../entities";

interface IUserRepo {
  create: (user: Partial<User>) => Promise<User>;
  findOne: (payload: object) => Promise<User>;
  all: () => Promise<User[]>;
}

interface Ilogin {
  status: number;
  message: object;
}

export { IUserRepo, Ilogin };
