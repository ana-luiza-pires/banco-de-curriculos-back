import { Request, Response } from "express"
import { getRepository } from "typeorm"
import CurriculoModel from "../models/CurriculoModel"
import * as Yup from 'yup'
import consultacep from "../utils/consultacep"

export default {
    async create(req: Request, res: Response) {
        const {
            name,
            role,
            birth,
            maritalStatus,
            gender,
            address,
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
            name: name,
            role: role,
            birth: birth,
            maritalStatus: maritalStatus,
            gender: gender,
            address: address,
            neighborhood: neighborhood,
            city: city,
            zipcode: zipcode,
            phone: phone,
            cellphone: cellphone,
            linkedin: linkedin,
            email: email,
            RG: RG,
            CPF: CPF,
            vehicle: vehicle,
            CNH: CNH
        }

        const curriculoRepository = getRepository(CurriculoModel);

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            role: Yup.string().optional(),
            birth: Yup.string().optional(),
            maritalStatus: Yup.string().optional(),
            gender: Yup.string().optional(),
            address: Yup.string().required(),
            neighborhood: Yup.string().required(),
            city: Yup.string().required(),
            zipcode: Yup.string().optional(),
            phone: Yup.string().optional(),
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

        const validou = await consultacep(data.zipcode)
        
        if(validou){
            return res.status(400).json({status: 400, message: 'Este CEP não existe'})
        }

        const newCurriculo = curriculoRepository.create(data);
        await curriculoRepository.save(newCurriculo)

        return res.status(201).json(newCurriculo);
    }

}