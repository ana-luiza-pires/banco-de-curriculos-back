"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CurriculoController_1 = __importDefault(require("./controllers/CurriculoController"));
const routes = express_1.Router();
routes.post('/', CurriculoController_1.default.create);
exports.default = routes;
