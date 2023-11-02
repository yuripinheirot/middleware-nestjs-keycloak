import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-store';
import { StatusModule } from './modules/status/status.module';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { SharedModule } from './shared/shared.module';
import type { RedisClientOptions } from 'redis';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { PokedexModule } from './modules/pokedex/pokedex.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokedexEntity } from './entities/pokedex.entity';

@Module({
  imports: [
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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [PokedexEntity],
      synchronize: true,
    }),
    StatusModule,
    PokemonModule,
    SharedModule,
    PokedexModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
