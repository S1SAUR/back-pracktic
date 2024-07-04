import { Module } from '@nestjs/common';
import { ProdactService } from './prodact.service';
import { ProdactController } from './prodact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prodact } from './entities/prodact.entity';
import { ProdactRepository } from './prodact.repositori';

@Module({
  imports: [TypeOrmModule.forFeature([Prodact])],
  controllers: [ProdactController],
  providers: [ProdactService,ProdactRepository],
})
export class ProdactModule {}
