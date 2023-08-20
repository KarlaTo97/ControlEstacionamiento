"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriasController_1 = require("../controllers/CategoriasController");
class CategoriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', CategoriasController_1.categoriasController.getCategoriasVL);
        //Consultar un registro
        this.router.get('/:id', CategoriasController_1.categoriasController.getByIdCategoria);
        //Actualizar un registro
        this.router.put('/:id', CategoriasController_1.categoriasController.updateCategoria);
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;
