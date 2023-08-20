"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesosController = void 0;
const database_1 = __importDefault(require("../database"));
class AccesosController {
    getAccesos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM tb_accesos INNER JOIN tb_autos on tb_accesos.id_auto=tb_autos.id_auto INNER JOIN tb_categorias on tb_autos.id_categoria=tb_categorias.id_categoria');
            res.json(result[0]);
        });
    }
    getByIdAcceso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_accesos WHERE id_acceso= ?', [id]);
            if (result.length > 0) {
                res.json(result[0]);
            }
        });
    }
    createAcceso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_accesos set ?', [req.body]);
            //res.json(result);
            //console.log(req.body);
            res.json({ message: 'Registro almacenado!' });
        });
    }
    updateAcceso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tb_accesos set ? WHERE id_acceso= ?', [req.body, id]);
            //res.json(result);
            res.json({ text: "Registro actualizado!" });
        });
    }
    deleteAcceso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tb_accesos WHERE id_acceso= ?', [id]);
            //res.json(result);
            res.json({ text: 'Registro eliminado' });
        });
    }
}
exports.accesosController = new AccesosController();
