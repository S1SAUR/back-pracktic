import { InjectRepository } from "@nestjs/typeorm";
import { Categoris } from "./entities/categoris.entity";
import { Repository } from "typeorm";
import { CreateCategorisDto } from "./dto/create-categoris.dto";
import { UpdateCategorisDto } from "./dto/update-categoris.dto";


export class CategorisRepository {
    constructor(@InjectRepository(Categoris) readonly repositori:Repository<Categoris>){}


    create(CreateCategorisDto: CreateCategorisDto) {
        return this.repositori.save(CreateCategorisDto)
      }
    
      findAll() {
        return this.repositori
        .createQueryBuilder('category')
        .getMany()
      }
    
      findOne(id: number) {
        return this.repositori
        .createQueryBuilder('category')
        .where('category.id = :id' , {id})
        .getMany()
      }
    
      async update(id: number, UpdateCategorisDto: UpdateCategorisDto) {
        await this.repositori
        .createQueryBuilder('category')
        .update()
        .set(UpdateCategorisDto)
        .where('categoey.id = :id',{id})

        return this.repositori.findOneBy({id})
      }
    
      async remove(id: number) {
        await this.repositori.softDelete({id})
        
        return this.repositori
        .createQueryBuilder('category')
        .withDeleted()
        .where('category.id = :id',{id})
        .getOne()
      }
}