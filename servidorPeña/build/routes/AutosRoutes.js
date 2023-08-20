"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutosController_1 = require("../controllers/AutosController");
class AutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', AutosController_1.autosController.getAutos);
        //Consultar un registro
        this.router.get('/:id', AutosController_1.autosController.getByIdAuto);
        //Insertar un registro
        this.router.post('/', AutosController_1.autosController.createAuto);
        //Actualizar un registro
        this.router.put('/:id', AutosController_1.autosController.updateAuto);
        //Eliminar un registro
        this.router.delete('/:id', AutosController_1.autosController.deleteAuto);
    }
}
const autosRoutes = new AutosRoutes();
exports.default = autosRoutes.router;
