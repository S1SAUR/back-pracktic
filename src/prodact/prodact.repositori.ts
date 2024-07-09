import { InjectRepository } from "@nestjs/typeorm";
import { Prodact } from "./entities/prodact.entity";
import { Repository } from "typeorm";
import { CreateProdactDto } from "./dto/create-prodact.dto";
import { UpdateProdactDto } from "./dto/update-prodact.dto";
import { Categoris } from "src/categoris/entities/categoris.entity";
import { CategorisRepository } from "src/categoris/categoris.repository";

export class ProdactRepository {
    constructor(@InjectRepository(Prodact) 
                 readonly repositori:Repository<Prodact>,
                 @InjectRepository(Categoris) readonly categoryrepository:Repository<Categoris>){}


      async create(CreateProdactDto: CreateProdactDto) {
        const categoris = await this.categoryrepository
        .createQueryBuilder('category')
        .where('category.id IN(:Ids)',{Ids: CreateProdactDto.categoryIds})
        .getMany()
        
        let prodact = this.repositori.create(CreateProdactDto)
        prodact.categoris= categoris
        return this.repositori.save(CreateProdactDto)
      }
    
      findAll() {
        return this.repositori
        .createQueryBuilder('peodact')
        .leftJoinAndSelect('peodact.categoris','cate')
        .getMany()
      }
    
      findOne(id: number) {
        return this.repositori
        .createQueryBuilder('peodact')
        .where('peodact.id = :id' , {id})
        .getMany()
      }
    
      async update(id: number, updateProdactDto: UpdateProdactDto) {

        const categoris = await this.categoryrepository
        .createQueryBuilder('category')
        .where('category.id IN(:Ids)',{Ids: updateProdactDto.categoryIds})
        .getMany()

        let {categoryIds,...update } = updateProdactDto

        await this.repositori
        .createQueryBuilder('prodact')
        .update(update)
        .set(updateProdactDto)
        .where('prodact.id = :id' ,{id})
        .execute()

        const prodact = await this.repositori.createQueryBuilder('prodact')
        .where('prodact.id = :id' , {id})
        .getOne()

       await this.repositori.createQueryBuilder('catrgory')
       .relation(Prodact,'categoris')
       .of(prodact)
       .addAndRemove(updateProdactDto,prodact.categoris)

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