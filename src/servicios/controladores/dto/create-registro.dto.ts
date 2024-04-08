import { IsString, IsObject, isString, IsNumber, IsNotEmpty } from "class-validator";
import { Usuarios } from "src/servicios/usuarios/entity";



export class CreateRegistroDto {
    @IsString()
    readonly nombreEm: string;

    @IsString()
    readonly nit: string;

    @IsString()
    readonly total: string;

    @IsObject()
    readonly usuario: Partial<Usuarios>
    
    @IsNumber()
    @IsNotEmpty()
    readonly userid: number;

    

}