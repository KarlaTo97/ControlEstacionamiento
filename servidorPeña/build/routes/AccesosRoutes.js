"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccesosController_1 = require("../controllers/AccesosController");
class AccesosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', AccesosController_1.accesosController.getAccesos);
        //Consultar un registro
        this.router.get('/:id', AccesosController_1.accesosController.getByIdAcceso);
        //Insertar un registro
        this.router.post('/', AccesosController_1.accesosController.createAcceso);
        //Actualizar un registro
        this.router.put('/:id', AccesosController_1.accesosController.updateAcceso);
        //Eliminar un registro
        this.router.delete('/:id', AccesosController_1.accesosController.deleteAcceso);
    }
}
const accesosRoutes = new AccesosRoutes();
exports.default = accesosRoutes.router;
