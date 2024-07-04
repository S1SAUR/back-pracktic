import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdactModule } from './prodact/prodact.module';
import { CategorisModule } from './categoris/categoris.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'S1sa.123',
      database: 'back',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProdactModule,
    CategorisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
