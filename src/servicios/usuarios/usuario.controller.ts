import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './entity';

@Controller('usuario')
export class UsuarioController {

    constructor (private readonly UsuarioService: UsuarioService ) {}

    @Post()
    async CreateUsuario(@Body() creartex : CreateUsuarioDto)  {
        await this.UsuarioService.CreateUsuario(creartex);
        return { messages:'Usuario creado correctamente'};
    }

}
