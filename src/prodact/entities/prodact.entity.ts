import { Categoris } from "src/categoris/entities/categoris.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Prodact {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    title:string

    @Column({type:'decimal'})
    prace:number

    @Column({type:'decimal',default:0})
    sale:number

    @Column()
    img:string

    @Column({type:'longtext'})
    description:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    delatedAt:Date

    @ManyToMany(() => Categoris,(categoris) => categoris.prodacts)
    @JoinTable()
    categoris:Categoris[]
}
