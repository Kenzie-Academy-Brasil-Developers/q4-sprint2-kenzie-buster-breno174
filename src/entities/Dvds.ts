import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Carts } from "./Cart";
import { Stock } from "./Stock";

@Entity("dvds")
export class Dvds {
  @PrimaryGeneratedColumn("uuid")
  readonly dvdId: string;

  @Column({ unique: true })
  name: string;

  @Column()
  duration: string;

  @OneToMany(() => Carts, (cart) => cart.dvds)
  cart: Carts[];

  @OneToOne(() => Stock, (stock) => stock.dvds, { eager: true })
  @JoinColumn()
  stock: Stock;
}
