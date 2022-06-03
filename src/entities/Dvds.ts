import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Carts } from "./Cart";
import { Stock } from "./Stock";

@Entity("dvds")
export class Dvds {
  @PrimaryGeneratedColumn("uuid")
  readonly DvdId: string;

  @Column()
  name: string;

  @Column()
  duration: string;

  @OneToMany(() => Carts, (cart) => cart.dvds)
  cart: Carts[];

  @ManyToOne(() => Stock, (stock) => stock.dvds)
  stock: Stock;

  constructor() {
    if (!this.DvdId) {
      this.DvdId = uuid();
    }
  }
}
