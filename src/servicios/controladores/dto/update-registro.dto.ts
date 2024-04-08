import { IsString } from "class-validator";



export class UpdateRegistroDto {
    @IsString()
    readonly nombreEm: string;

    @IsString()
    readonly nit: string;


    @IsString()
    readonly total: string;

}