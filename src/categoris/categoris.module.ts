import { Module } from '@nestjs/common';
import { CategorisService } from './categoris.service';
import { CategorisController } from './categoris.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoris } from './entities/categoris.entity';
import { CategorisRepository } from './categoris.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Categoris])],
  controllers: [CategorisController],
  providers: [CategorisService,CategorisRepository],
})
export class CategorisModule {}
