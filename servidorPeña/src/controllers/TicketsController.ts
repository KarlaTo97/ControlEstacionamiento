import {Request,Response}  from 'express';
import pool from '../database';

class TicketsController{
    async getTickets(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_tickets');
        res.json(result[0]);
    }

    async getByCodigoTicket(req:Request,res:Response){
        const {codigo}= req.params;
        const result= await pool.query('SELECT * FROM tb_tickets WHERE codigo= ?',[codigo]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    
    async createTicket(req:Request,res:Response){
        await pool.query('INSERT INTO tb_tickets set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateTicket(req:Request,res:Response){
        const {codigo} = req.params;
        await pool.query('UPDATE tb_tickets set ? WHERE codigo= ?',[req.body, codigo]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteTicket(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_tickets WHERE id_ticket= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const ticketsController= new TicketsController();