import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "../usuarios/entity";


@Entity()
export class Registro {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombreEm: string;

    @Column()
    nit: string;

    @Column()
    total: string ;


    @ManyToOne((type) =>  Usuarios)
    @JoinColumn({name: 'user_id'})
    usuario: Usuarios;

    


}