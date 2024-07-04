import { Injectable } from '@nestjs/common';
import { CreateProdactDto } from './dto/create-prodact.dto';
import { UpdateProdactDto } from './dto/update-prodact.dto';
import { ProdactRepository } from './prodact.repositori';

@Injectable()
export class ProdactService {

  constructor(private readonly repositori: ProdactRepository) {}

  create(CreateProdactDto: CreateProdactDto) {
    return this.repositori.create(CreateProdactDto)
  }

  findAll() {
    return this.repositori.findAll()
  }

  findOne(id: number) {
    return this.repositori.findOne(id)
  }

  update(id: number, updateProdactDto: UpdateProdactDto) {
    return this.repositori.update(id,UpdateProdactDto)
  }

  remove(id: number) {
    return this.repositori.remove(id)
  }
}
