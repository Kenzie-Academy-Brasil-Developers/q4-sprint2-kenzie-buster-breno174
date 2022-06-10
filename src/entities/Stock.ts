import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
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

  @OneToMany(() => Dvds, (dvd) => dvd.stock)
  dvds: Dvds[];

  constructor() {
    if (!this.stockId) {
      this.stockId = uuid();
    }
  }
}
