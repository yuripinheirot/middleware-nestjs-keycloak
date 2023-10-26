import { Module } from '@nestjs/common';
import { StatusModule } from './modules/status/status.module';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    StatusModule,
    PokemonModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
