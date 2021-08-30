import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('curriculoBD')
export default class CurriculoModel {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    role: string

    @Column()
    birth: string

    @Column()
    maritalStatus: string

    @Column()
    gender: string

    @Column()
    address: string

    @Column()
    neighborhood: string

    @Column()
    city: string

    @Column()
    zipcode: string

    @Column()
    phone: string

    @Column()
    cellphone: string

    @Column()
    linkedin: string

    @Column()
    email: string

    @Column()
    RG: string

    @Column()
    CPF: string

    @Column()
    vehicle: string

    @Column()
    CNH: string
}