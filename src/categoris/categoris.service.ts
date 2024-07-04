import { Injectable } from '@nestjs/common';
import { CreateCategorisDto } from './dto/create-categoris.dto';
import { UpdateCategorisDto } from './dto/update-categoris.dto';
import { CategorisRepository } from './categoris.repository';

@Injectable()
export class CategorisService {
  constructor(private readonly repositori: CategorisRepository) {}

  create(CreateCategorisDto: CreateCategorisDto) {
    return this.repositori.create(CreateCategorisDto)
  }

  findAll() {
    return this.repositori.findAll()
  }

  findOne(id: number) {
    return this.repositori.findOne(id)
  }

  update(id: number, UpdateCategorisDto: UpdateCategorisDto) {
    return this.repositori.update(id,UpdateCategorisDto)
  }

  remove(id: number) {
    return this.repositori.remove(id)
  }
}
