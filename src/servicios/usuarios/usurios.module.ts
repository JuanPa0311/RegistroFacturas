import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Registro } from '../controladores/registro.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Usuarios])],
    controllers:[UsuarioController],
    providers:[UsuarioService],
    exports:[UsuarioService]
})
export class UsuriosModule {}
