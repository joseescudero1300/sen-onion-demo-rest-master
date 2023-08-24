import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoModule } from './modules/demo/demo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  CoreModule,
  DatabaseOptionsProvider,
  SERVER,
} from '@aduana/sen-onion-core';
import { validated } from './common/configs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validated }),
    TypeOrmModule.forRootAsync(DatabaseOptionsProvider),
    CoreModule,
    DemoModule,
  ],
})
export class AppModule {
  static PORT: number;
  static PATH = 'prueba';
  constructor(private readonly configService: ConfigService) {
    AppModule.PORT = this.configService.get<number>(SERVER.PORT);
  }
}
