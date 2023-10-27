import { Injectable } from '@nestjs/common';
import { CustomLoggerService } from '../../logger/logger.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

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

  async getPokemonByName(name: string) {
    try {
      const { data } = await this.httpService.axiosRef.get(`/pokemon/${name}`, {
        baseURL: this.baseUrl,
      });

      return data;
    } catch (error) {
      this.logger.error('getPokemonByName()', error);
      throw error;
    }
  }
}
