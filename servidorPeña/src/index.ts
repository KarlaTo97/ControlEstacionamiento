import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index-routes';
import empleadosRoutes from './routes/EmpleadosRoutes';
import usuariosRoutes from './routes/UsuariosRoutes';
import categoriasRoutes from './routes/CategoriasRoutes';
import accesosRoutes from './routes/AccesosRoutes';
import autosRoutes from './routes/AutosRoutes';
import ticketsRoutes from './routes/TicketsRoutes';

class Server{
    public app:Application;
    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());   //acepta formato json
        this.app.use(express.urlencoded({extended:false})); //acepta formularios html
    }
    routes():void{
        this.app.use('/',indexRoutes);
        //this.app.use('/empleados/',empleadosRoutes);
        this.app.use('/usuarios/',usuariosRoutes);
        this.app.use('/categorias/',categoriasRoutes);
        this.app.use('/accesos/',accesosRoutes);
        this.app.use('/autos/',autosRoutes);
        this.app.use('/tickets/',ticketsRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port ',this.app.get('port'));
        });
    }
}
const server= new Server();
server.start();

