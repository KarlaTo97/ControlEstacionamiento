import {Router} from 'express';
import { ticketsController } from '../controllers/TicketsController';

class TicketsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',ticketsController.getTickets);
        //Consultar un registro
        this.router.get('/:id',ticketsController.getByCodigoTicket);
        //Insertar un registro
        this.router.post('/',ticketsController.createTicket);
        //Actualizar un registro
        this.router.put('/:id',ticketsController.updateTicket);
        //Eliminar un registro
        this.router.delete('/:id',ticketsController.deleteTicket);
    }
}
const ticketsRoutes= new TicketsRoutes();
export default ticketsRoutes.router;