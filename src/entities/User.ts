import { compare } from "bcrypt";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Carts } from "./Cart";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly userUuid?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdm?: boolean;

  @OneToMany(() => Carts, (carts) => carts.user)
  carts: Carts[];

  comparePwd = async (pwdstring: string) => {
    return await compare(pwdstring, this.password);
  };

  constructor() {
    if (!this.userUuid) {
      this.userUuid = uuid();
    }
  }
}
