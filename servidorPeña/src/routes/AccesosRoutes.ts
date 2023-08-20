import {Router} from 'express';
import { accesosController } from '../controllers/AccesosController';


class AccesosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
         //Consultar todos los registros
        this.router.get('/',accesosController.getAccesos);
        //Consultar Historial
        this.router.get('/:id',accesosController.getHistorial);
        // Conultar Corte de caja
        this.router.get('/:fecha',accesosController.getCorte);
        //Insertar un registro
        this.router.post('/',accesosController.createAcceso);
       
    }
}
const accesosRoutes= new AccesosRoutes();
export default accesosRoutes.router;