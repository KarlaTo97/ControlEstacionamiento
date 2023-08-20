import {Request,Response}  from 'express';
import pool from '../database';

class AutosController{
    async getAutos(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_autos');
        res.json(result[0]);
    }

    async getByIdAuto(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_autos WHERE id_auto= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    async createAuto(req:Request,res:Response){
        await pool.query('INSERT INTO tb_autos set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }
       async updateAuto(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_autos set ? WHERE id_auto= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteAuto(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_autos WHERE id_auto= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }

    async getAutocompleteSuggestions(req: Request, res:Response){
        const searchTerm = req.query.query;
        const result= pool.query('SELECT placa FROM tb_autos WHERE placa LIKE ?',['%'+searchTerm+'%']);
         res.json(result);
    }

}
export const autosController= new AutosController();
