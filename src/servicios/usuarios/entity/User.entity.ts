import { type } from "os";
import { Registro } from "src/servicios/controladores/registro.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column({nullable: false})
    nombre:string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    usuarioname: string;

    @Column({nullable: false})
    password:string;


    @CreateDateColumn()
    creardAt: Date;

    @UpdateDateColumn()
    actualizardAt:  Date;


}



































