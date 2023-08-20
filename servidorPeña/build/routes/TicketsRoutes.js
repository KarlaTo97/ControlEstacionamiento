"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketsController_1 = require("../controllers/TicketsController");
class TicketsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', TicketsController_1.ticketsController.getTickets);
        //Consultar un registro
        this.router.get('/:id', TicketsController_1.ticketsController.getByCodigoTicket);
        //Insertar un registro
        this.router.post('/', TicketsController_1.ticketsController.createTicket);
        //Actualizar un registro
        this.router.put('/:id', TicketsController_1.ticketsController.updateTicket);
        //Eliminar un registro
        this.router.delete('/:id', TicketsController_1.ticketsController.deleteTicket);
    }
}
const ticketsRoutes = new TicketsRoutes();
exports.default = ticketsRoutes.router;
