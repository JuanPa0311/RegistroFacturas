import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from 'src/servicios/controladores/registro.entity';
import { RegistroController } from 'src/servicios/controladores/registro.controller';
import { RegistroService } from 'src/servicios/controladores/registro.service';
import { Usuarios } from '../usuarios/entity';
import { UsuarioService } from '../usuarios/usuario.service';

@Module({
    imports:[TypeOrmModule.forFeature([Registro, Usuarios])],
    controllers:[RegistroController],
    providers:[RegistroService, UsuarioService],
    exports:[RegistroService]
})
export class RegistroModule {}
