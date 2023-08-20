import {Router} from 'express';
import { autosController } from '../controllers/AutosController';

class AutosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',autosController.getAutos);
        //Consultar un registro
        this.router.get('/:id',autosController.getByIdAuto);
        //Insertar un registro
        this.router.post('/',autosController.createAuto);
        //Actualizar un registro
        this.router.put('/:id',autosController.updateAuto);
        //Eliminar un registro
        this.router.delete('/:id',autosController.deleteAuto);

        this.router.get('/:autocomplete', autosController.getAutocompleteSuggestions);

    }
}
const autosRoutes= new AutosRoutes();
export default autosRoutes.router;