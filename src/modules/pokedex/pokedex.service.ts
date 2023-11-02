import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokedexEntity } from 'src/entities/pokedex.entity';
import { Repository } from 'typeorm';
import { AddPokemonRequestDtoType } from './types/AddPokemonDto.request.type';

@Injectable()
export class PokedexService {
  constructor(
    @InjectRepository(PokedexEntity)
    private pokedexRepository: Repository<PokedexEntity>,
  ) {}

  async addPokemon(idUser: string, payload: AddPokemonRequestDtoType) {
    const alreadyAdded = await this.pokedexRepository.findOne({
      where: { pokemonId: payload.pokemonId, idUser: idUser },
    });

    if (alreadyAdded) {
      throw new BadRequestException('Pokemon already added');
    }

    await this.pokedexRepository.insert({
      pokemonId: payload.pokemonId,
      idUser,
    });
  }

  getPokedex(idUser: string) {
    return this.pokedexRepository.find({ where: { idUser } });
  }
}
