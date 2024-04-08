import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto, Usuarios } from './entity/index';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
   constructor( @InjectRepository(Usuarios) private readonly usuariosRepository: Repository <Usuarios>){}

   async CreateUsuario({nombre, email, usuarioname, password, }: CreateUsuarioDto){
    const consulta: Usuarios= await this.usuariosRepository.create({nombre, email, usuarioname, password })
    return this.usuariosRepository.save(consulta);

   }

   async ExisteUsuario(id: number): Promise<boolean> {
      const user= await this.usuariosRepository.findOneBy({id:id})
      return !!user;
   }



}
