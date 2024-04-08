import { IsString, IsObject, isString } from "class-validator";


export class CreateUsuarioDto {
    @IsString()
    nombre:string;

    @IsString()
    email: string;

    @IsString()
    usuarioname: string;

    @IsString()
    password:string;
}