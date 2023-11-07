import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { PokeApiService } from './services/pokeapi/pokeApi.service';
import { CustomLoggerService } from './logger/logger.service';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
  TokenValidation,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Global()
@Module({
  imports: [
    HttpModule,
    KeycloakConnectModule.register({
      authServerUrl: 'http://172.17.0.1:8080/auth',
      realm: 'pokemon',
      clientId: 'pokemon-api',
      secret: 'yfs3XJybcVIXtmFWfBmGpGgwp3Dk13Cu',
      cookieKey: 'Authorization',
      logLevels: ['verbose'],
      tokenValidation: TokenValidation.ONLINE,
    }),
  ],
  exports: [PokeApiService, HttpModule],
  providers: [
    PokeApiService,
    CustomLoggerService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class SharedModule {}
