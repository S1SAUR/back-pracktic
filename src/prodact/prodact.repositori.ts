import { InjectRepository } from "@nestjs/typeorm";
import { Prodact } from "./entities/prodact.entity";
import { Repository } from "typeorm";
import { CreateProdactDto } from "./dto/create-prodact.dto";
import { UpdateProdactDto } from "./dto/update-prodact.dto";

export class ProdactRepository {
    constructor(@InjectRepository(Prodact) readonly repositori:Repository<Prodact>){}


    create(CreateProdactDto: CreateProdactDto) {
        return this.repositori.save(CreateProdactDto)
      }
    
      findAll() {
        return this.repositori
        .createQueryBuilder('peodact')
        .getMany()
      }
    
      findOne(id: number) {
        return this.repositori
        .createQueryBuilder('peodact')
        .where('peodact.id = :id' , {id})
        .getMany()
      }
    
      async update(id: number, updateProdactDto: UpdateProdactDto) {
       await this.repositori.update(id,updateProdactDto)

       return this.repositori
        .createQueryBuilder('peodact')
        .where('peodact.id = :id',{id})
        .getOne()
      }
    
      async remove(id: number) {
        await this.repositori.softDelete(id)

        return this.repositori
        .createQueryBuilder('peodact')
        .withDeleted()
        .where('peodact.id = :id',{id})
        .getOne()
      }
}