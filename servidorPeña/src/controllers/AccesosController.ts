import {Request,Response}  from 'express';
import pool from '../database';

class AccesosController{
    async getAccesos(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_accesos');
        res.json(result[0]);
    }
    async getHistorial(req:Request,res:Response){
        const { fechaInicio, fechaFin } = req.body;
        const result= await pool.query('SELECT * FROM tb_accesos INNER JOIN tb_autos on tb_accesos.id_auto=tb_autos.id_auto INNER JOIN tb_categorias on tb_autos.id_categoria=tb_categorias.id_categoria WHERE fecha BETWEEN ? AND ?',[fechaInicio,fechaFin]);
        res.json(result[0]);
    }
    async getCorte(req:Request,res:Response){
        const { fecha} = req.body;
        const result= await pool.query('SELECT * FROM tb_accesos INNER JOIN tb_autos on tb_accesos.id_auto=tb_autos.id_auto INNER JOIN tb_categorias on tb_autos.id_categoria=tb_categorias.id_categoria WHERE DATE(fecha)= ?'[fecha]);
        res.json(result[0]);
    }
    async createAcceso(req:Request,res:Response){
        await pool.query('INSERT INTO tb_accesos set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }
}
export const accesosController= new AccesosController();