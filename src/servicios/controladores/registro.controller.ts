import { Controller, Get, Patch, Post ,Delete , Query,Param,Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { Registro } from './registro.entity';
import { CreateRegistroDto, UpdateRegistroDto, paginaciionQueryDto } from './dto';
import { UsuarioService } from '../usuarios/usuario.service';

@Controller('registro')
export class RegistroController {
    constructor (
        private readonly registroService: RegistroService ,
        private readonly usuarioService: UsuarioService 
    ) {}
    

    @Get()
    getRegistro(@Query() paginacion:paginaciionQueryDto): Promise <Registro[]> {
        return this.registroService.getRegistro(paginacion);
    }
    
    @Get(':id') // Registro/1
    getConsulta (@Param ('id') id:number): Promise <Registro> {
        return this.registroService.getConsulta(id);

    }

    @Post()
    async CreateRegistro(@Body() creartex : CreateRegistroDto)  {
        const userExists = await this.usuarioService.ExisteUsuario(creartex.userid);
        if (!userExists) {
            throw new HttpException('Usuario no registrado', HttpStatus.BAD_REQUEST);
        }

        // Guardar el mensaje
        try {
            await this.registroService.CreateRegistro(creartex);
            return { messages:'Registro creado correctamente'};
        } catch (error) {
            throw new HttpException('Error al guardar mensaje', HttpStatus.INTERNAL_SERVER_ERROR);
        }
   
    }

    @Patch(':id')
    async UpdateRegistro(@Param('id') id:number, @Body() Actualizar :UpdateRegistroDto ) {
        await this.registroService.updateRegistro(id, Actualizar);
        return { messages:'Registro Actualizado correctamente' }

    }

    @Delete(':id')
    RemoveRegistrO(@Param('id') id:number): Promise <void>  {
        return this.registroService.removeRegistro(id);

    }
    

}
