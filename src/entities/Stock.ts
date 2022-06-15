import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Dvds } from "./Dvds";

@Entity("stock")
export class Stock {
  @PrimaryGeneratedColumn("uuid")
  readonly stockId: string;

  @Column()
  quantity: number;

  @Column({ type: "float" })
  price: number;

  @OneToOne(() => Dvds, (dvd) => dvd.stock)
  dvds: Dvds;
}
