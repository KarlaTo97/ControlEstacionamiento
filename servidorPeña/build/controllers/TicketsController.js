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
exports.ticketsController = void 0;
const database_1 = __importDefault(require("../database"));
class TicketsController {
    getTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM tb_tickets');
            res.json(result[0]);
        });
    }
    getByCodigoTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_tickets WHERE codigo= ?', [codigo]);
            if (result.length > 0) {
                res.json(result[0]);
            }
        });
    }
    createTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_tickets set ?', [req.body]);
            //res.json(result);
            //console.log(req.body);
            res.json({ message: 'Registro almacenado!' });
        });
    }
    updateTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('UPDATE tb_tickets set ? WHERE codigo= ?', [req.body, codigo]);
            //res.json(result);
            res.json({ text: "Registro actualizado!" });
        });
    }
    deleteTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tb_tickets WHERE id_ticket= ?', [id]);
            //res.json(result);
            res.json({ text: 'Registro eliminado' });
        });
    }
}
exports.ticketsController = new TicketsController();
