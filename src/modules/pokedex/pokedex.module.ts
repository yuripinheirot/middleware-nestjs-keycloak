import { Module } from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { PokedexController } from './pokedex.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokedexEntity } from 'src/entities/pokedex.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokedexEntity])],
  controllers: [PokedexController],
  providers: [PokedexService],
})
export class PokedexModule {}
