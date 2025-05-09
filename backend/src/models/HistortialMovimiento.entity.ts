import { Column, Entity, UpdateDateColumn } from "typeorm";
import { DeleteDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { CreateDateColumn } from "typeorm";
import { TipoDeMovimiento } from "../constants/tipoDeMovimientos";

@Entity()
export class HistorialMovimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", default: TipoDeMovimiento.OTRO })
  tipoDeMovimiento: TipoDeMovimiento;

  @Column({ nullable: false })
  descripcion: string;

  @Column({ nullable: false })
  cantidad: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
