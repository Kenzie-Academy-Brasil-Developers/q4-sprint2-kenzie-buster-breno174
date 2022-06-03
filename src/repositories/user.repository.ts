import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { IUserRepo } from "../interfaces/user.interfaces";

class UserRepository implements IUserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(User);
  }

  create = async (user: Partial<User>) => await this.ormRepo.save(user);

  all = async () => await this.ormRepo.find();

  findOne = async (payload: object) => {
    return (await this.ormRepo.findOneBy({ ...payload })) as User;
  };
}

export default new UserRepository();
