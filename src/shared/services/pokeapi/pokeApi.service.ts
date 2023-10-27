import { Injectable } from '@nestjs/common';
import { CustomLoggerService } from '../../logger/logger.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import {
  PokemonApiType,
  PokemonSpecieApiType,
} from 'src/shared/types/pokemon.type';
import { PokemonMapper } from 'src/shared/mappers/pokemon.mapper';

@Injectable()
export class PokeApiService {
  baseUrl: string;

  constructor(
    private readonly logger: CustomLoggerService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.logger.setPrefix('PokeApiService');
    this.baseUrl = this.configService.getOrThrow<string>('URL_POKE_API');
  }

  async getPokemonByNameOrId(id: string | number): Promise<PokemonApiType> {
    this.logger.log('getPokemonSpecieByNameOrId()', { id });

    const { data } = await this.httpService.axiosRef.get<PokemonApiType>(
      `/pokemon/${id}`,
      {
        baseURL: this.baseUrl,
      },
    );

    const pokemon = PokemonMapper.pokemon(data);

    this.logger.log('getPokemonSpecieByNameOrId() - SUCCESS', {
      data: pokemon,
    });

    return data;
  }

  async getPokemonSpecieByNameOrId(
    id: number | string,
  ): Promise<PokemonSpecieApiType> {
    this.logger.log('getPokemonSpecieByNameOrId()', { id });

    const { data } = await this.httpService.axiosRef.get<PokemonSpecieApiType>(
      `/pokemon/${id}`,
      {
        baseURL: this.baseUrl,
      },
    );

    const pokemonSpecie = PokemonMapper.pokemonSpecie(data);

    this.logger.log('getPokemonSpecieByNameOrId() - SUCCESS', {
      data: pokemonSpecie,
    });

    return data;
  }
}
