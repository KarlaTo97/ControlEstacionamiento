import {Router} from 'express';
import { categoriasController } from '../controllers/CategoriasController';

class CategoriasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',categoriasController.getCategoriasVL);
        //Consultar un registro
        this.router.get('/:id',categoriasController.getByIdCategoria);
        //Actualizar un registro
        this.router.put('/:id',categoriasController.updateCategoria);
    }
    
}
const categoriasRoutes= new CategoriasRoutes();
export default categoriasRoutes.router;