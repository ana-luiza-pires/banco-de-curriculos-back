"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CurriculoModel_1 = __importDefault(require("../models/CurriculoModel"));
const Yup = __importStar(require("yup"));
exports.default = {
    async create(req, res) {
        const { name, role, birth, maritalstatus, gender, adress, neighborhood, city, zipcode, phone, cellphone, linkedin, email, RG, CPF, vehicle, CNH } = req.body;
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
        };
        const curriculoRepository = typeorm_1.getRepository(CurriculoModel_1.default);
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
        });
        await schema.validate(data, {
            abortEarly: false
        });
        console.log(schema);
        const newCurriculo = curriculoRepository.create(data);
        await curriculoRepository.save(newCurriculo);
        return res.status(201).json(newCurriculo);
    }
};
