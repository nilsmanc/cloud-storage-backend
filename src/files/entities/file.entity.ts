import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  filename: string;
  
  @Column()
  originalName: string;
  
  @Column()
  size: number;

  @Column()
  mimetype: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}
