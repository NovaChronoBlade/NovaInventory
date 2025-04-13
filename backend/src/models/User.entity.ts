import { Column, Entity, UpdateDateColumn } from "typeorm";
import { Role } from "../constants/roles";
import { DeleteDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { CreateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: Role, default: Role.VENDOR })
  rol: Role;

  @Column({ unique: true, nullable: false })
  cedula: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  apellido: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
