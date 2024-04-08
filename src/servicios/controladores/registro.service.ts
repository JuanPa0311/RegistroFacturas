import { Injectable, NotFoundException } from '@nestjs/common';
import { Registro } from './registro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateRegistroDto, UpdateRegistroDto, paginaciionQueryDto} from './dto/index'
import { Usuarios } from '../usuarios/entity';

@Injectable()
export class RegistroService {
    constructor(@InjectRepository(Registro) private readonly registroRepository: Repository <Registro>,
                @InjectRepository(Usuarios) private readonly usuariosRepository: Repository <Usuarios>
    ){}

    async getRegistro({ limit,offset}:paginaciionQueryDto): Promise<Registro[]> {
        return  await this.registroRepository.find({relations:['usuario'],
         skip: offset,
         take: limit,
        })
    }

    async getConsulta(id:number): Promise <Registro> {
        const consulta : Registro = await this.registroRepository.findOne({
            where: {id},
            relations: ['usuario']
        
        });

        if(!consulta){
            throw new NotFoundException("No se encuentra id");
        }

        return consulta;
    }
    
    async CreateRegistro({nombreEm , nit , total  }: CreateRegistroDto){
        const consulta: Registro= await this.registroRepository.create({nombreEm ,nit ,total})
        return this.registroRepository.save(consulta);

    }

    async updateRegistro(id: number, {nombreEm, nit, total}: UpdateRegistroDto) {
        const consulta:Registro  = await this.registroRepository.preload({
            id,
            nombreEm ,
            nit,
            total,
        });

        if(!consulta){
            throw new NotFoundException("no se encuentra Id")
        }
        

        return this.registroRepository.save(consulta);
    }

    async  removeRegistro (id: number): Promise <void> {
        const eliminar: Registro =  await this.registroRepository.findOneBy({id:id});
    
        if(!eliminar){
            throw new NotFoundException("no se encuentra Id")
        }
    
        this.registroRepository.remove(eliminar);
    }
    
}

