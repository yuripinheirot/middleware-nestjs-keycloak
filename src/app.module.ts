import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-store';
import { StatusModule } from './modules/status/status.module';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { SharedModule } from './shared/shared.module';
import type { RedisClientOptions } from 'redis';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { PokedexModule } from './modules/pokedex/pokedex.module';

@Module({
  imports: [
    StatusModule,
    PokemonModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register<RedisClientOptions>({
      ttl: +process.env.TTL_CACHE_IN_MS,
      max: 3,
      isGlobal: true,
      store: redisStore as unknown as CacheStore,
      socket: {
        port: 6379,
        host: 'redis',
      },
    }),
    PokedexModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
