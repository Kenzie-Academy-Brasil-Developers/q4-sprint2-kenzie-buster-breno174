import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Dvds } from "./Dvds";
import { User } from "./User";

@Entity("carts")
export class Carts {
  @PrimaryGeneratedColumn("uuid")
  readonly cartId: string;

  @Column()
  paid: boolean;

  @Column({ type: "float" })
  total: number;

  @ManyToOne(() => User, (user) => user.carts, { eager: true })
  user: User;

  @ManyToOne(() => Dvds, (dvd) => dvd.cart, { eager: true })
  dvds: Dvds;
}
