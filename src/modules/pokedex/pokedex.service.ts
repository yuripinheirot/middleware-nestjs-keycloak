import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokedexEntity } from 'src/entities/pokedex.entity';
import { Repository } from 'typeorm';
import { AddPokemonRequestDtoType } from './types/addPokemonDto.request.type';

@Injectable()
export class PokedexService {
  constructor(
    @InjectRepository(PokedexEntity)
    private pokedexRepository: Repository<PokedexEntity>,
  ) {}

  getPokedex(idUser: string) {
    return this.pokedexRepository.find({ where: { idUser } });
  }

  async addPokedex(idUser: string, payload: AddPokemonRequestDtoType) {
    const alreadyAdded = await this.pokedexRepository.findOne({
      where: { pokemonName: payload.pokemonName, idUser: idUser },
    });

    if (alreadyAdded) {
      throw new BadRequestException('Pokemon already added');
    }

    await this.pokedexRepository.insert({
      pokemonName: payload.pokemonName,
      idUser,
    });

    return this.getPokedex(idUser);
  }

  async removePokedex(idUser: string, pokemonName: string) {
    await this.pokedexRepository.delete({
      pokemonName,
      idUser,
    });

    return this.getPokedex(idUser);
  }
}
