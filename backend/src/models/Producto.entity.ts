import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Proveedor } from "./Proveedor.entity";
import { Estante } from "./Estante.entity";

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  tipoProducto: string;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  descripcion: string;

  @Column("decimal", { precision: 10, scale: 2 })
  precio: number;

  @Column({ nullable: false })
  cantidad: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.productos)
  @JoinColumn({ name: "proveedor_id" })
  proveedor: Proveedor;

  @ManyToOne(() => Estante, (estante) => estante.productos)
  @JoinColumn({ name: "estante_id" })
  estante: Estante;
}
