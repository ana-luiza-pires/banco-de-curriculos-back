import { Router } from "express";
import CurriculoController from "./controllers/CurriculoController";


const routes = Router()
routes.post('/', CurriculoController.create)

export default routes;