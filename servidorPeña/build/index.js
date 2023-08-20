"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const UsuariosRoutes_1 = __importDefault(require("./routes/UsuariosRoutes"));
const CategoriasRoutes_1 = __importDefault(require("./routes/CategoriasRoutes"));
const AccesosRoutes_1 = __importDefault(require("./routes/AccesosRoutes"));
const AutosRoutes_1 = __importDefault(require("./routes/AutosRoutes"));
const TicketsRoutes_1 = __importDefault(require("./routes/TicketsRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //acepta formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //acepta formularios html
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        //this.app.use('/empleados/',empleadosRoutes);
        this.app.use('/usuarios/', UsuariosRoutes_1.default);
        this.app.use('/categorias/', CategoriasRoutes_1.default);
        this.app.use('/accesos/', AccesosRoutes_1.default);
        this.app.use('/autos/', AutosRoutes_1.default);
        this.app.use('/tickets/', TicketsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
