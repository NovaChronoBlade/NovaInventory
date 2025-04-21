import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Producto } from "./Producto.entity";

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  telefono: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  direccion: string;

  @Column({ nullable: true })
  informacion: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => Producto, (producto) => producto.proveedor)
  productos: Producto[];
}
