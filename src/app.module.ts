import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroModule } from 'src/servicios/controladores/registro.module';
import { UsuriosModule } from './servicios/usuarios/usurios.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RegistroModule,
    UsuriosModule,
    DatabaseModule,
  ],
  
  
})
export class AppModule {
  static  port: number
  constructor(private readonly ConfigService: ConfigService){

    AppModule.port= +this.ConfigService.get('PORT');


  }
}

