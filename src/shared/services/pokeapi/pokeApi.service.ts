import { Injectable } from '@nestjs/common';
import { CustomLoggerService } from '../../logger/logger.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import {
  PokemonApiType,
  PokemonOffsetResponseApiType,
} from 'src/shared/types/pokemonApi.type';
import { plainToClass } from 'class-transformer';
import { PokemonApiDto } from './dto/pokemonApi.response.dto';
import { PokemonSpecieApiDto } from './dto/pokemonSpecieApi.response.dto';
import { PokemonSpecieApiType } from 'src/shared/types/pokemonSpecieApi.type';
import * as querystring from 'querystring';
import { queryPaginatedParams } from 'src/shared/types/params.type';

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

    const pokemon = plainToClass(PokemonApiDto, data);

    this.logger.log('getPokemonSpecieByNameOrId() - SUCCESS', {
      data: pokemon,
    });

    return pokemon;
  }

  async getPokemonSpecieByNameOrId(
    id: number | string,
  ): Promise<PokemonSpecieApiType> {
    this.logger.log('getPokemonSpecieByNameOrId()', { id });

    const { data } = await this.httpService.axiosRef.get<PokemonSpecieApiType>(
      `/pokemon-species/${id}`,
      {
        baseURL: this.baseUrl,
      },
    );

    const pokemonSpecie = plainToClass(PokemonSpecieApiDto, data);

    this.logger.log('getPokemonSpecieByNameOrId() - SUCCESS', {
      data: pokemonSpecie,
    });

    return pokemonSpecie;
  }

  async findAllPokemonPaginated(
    query: queryPaginatedParams,
  ): Promise<PokemonOffsetResponseApiType> {
    this.logger.log('findAllPokemonPaginated()', { query });

    const { data } =
      await this.httpService.axiosRef.get<PokemonOffsetResponseApiType>(
        `/pokemon?${querystring.stringify(query)}`,
        {
          baseURL: this.baseUrl,
        },
      );

    this.logger.log('findAllPokemonPaginated() - SUCCESS', {
      data,
    });

    return data;
  }
}
