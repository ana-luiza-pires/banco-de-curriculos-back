import { getRepository } from "typeorm"
import {Request, Response} from "express"
import curriculoModel from "../models/CurriculoModel"
import * as Yup from 'yup'

export default {
    async create(req: Request, res: Response) {
        const { 
            name,
            role,
            birth,
            maritalstatus,
            gender,
            adress,
            neighborhood,
            city,
            zipcode,
            phone,
            cellphone,
            linkedin,
            email,
            RG,
            CPF,
            vehicle,
            CNH
        } = req.body
        
        const data = {
        name,
        role,
        birth,
        maritalstatus,
        gender,
        adress,
        neighborhood,
        city,
        zipcode,
        phone,
        cellphone,
        linkedin,
        email,
        RG,
        CPF,
        vehicle,
        CNH 
    }

        const curriculoRepository = getRepository(curriculoModel);

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            role: Yup.string().optional(),
            birth: Yup.string().required(),
            maritalstatus: Yup.string().optional(),
            gender: Yup.string().optional(),
            adress: Yup.string().required(),
            neighborhood: Yup.string().required(),
            city: Yup.string().required(),
            zipcode: Yup.string().optional(),
            phone: Yup.string().required(),
            cellphone: Yup.string().optional(),
            linkedin: Yup.string().optional(),
            email: Yup.string().optional(),
            RG: Yup.string().required(),
            CPF: Yup.string().required(),
            vehicle: Yup.string().optional(),
            CNH: Yup.string().optional()           
        })

        await schema.validate(data, {
            abortEarly: false
        })

        console.log(schema);
        const newCurriculo = curriculoRepository.create(data);
        await curriculoRepository.save(newCurriculo)

        return res.status(201).json(newCurriculo);
        }

}