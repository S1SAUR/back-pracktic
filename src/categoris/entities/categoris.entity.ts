import { Prodact } from "src/prodact/entities/prodact.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Categoris {
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar'})
    title :string;

    @CreateDateColumn()
    createdAt :Date;

    @UpdateDateColumn()
    updatedAt :Date;

    @DeleteDateColumn()
    delatedAt :Date;

    @ManyToMany(() => Prodact,(prodact) => prodact.categoris)
    prodacts:Prodact[]
}
