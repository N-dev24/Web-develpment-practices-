import { RequestHandler, Request, Response } from "express";
import { Usuario } from "../models/usuario"; 
import { Empresa } from "../models/empresa";

export const createUsuario: RequestHandler = (req: Request, res: Response): any => { 
  if (!req.body) return res.status(400).json({ status: "error", message: "Content can not be empty" }); 
   
  Usuario.create({ ...req.body }) 
    .then((data: Usuario | null) => res.status(200).json({ status: "success", payload: data })) 
    .catch((err: any) => res.status(500).json({ status: "error", message: err.message })); 
}; 

export const getAllUsuarios: RequestHandler = (req: Request, res: Response): any => { 
   Usuario.findAll({ include: [Empresa] }) 
   .then((data: Usuario[]) => res.status(200).json({ status: "success", payload: data })) 
   .catch((err: any) => res.status(500).json({ status: "error", message: err.message })); 
}; 

export const deleteUsuario: RequestHandler = async (req: Request, res: Response): Promise<any> => { 
    const { id } = req.body; 
    try { 
      await Usuario.destroy({ where: { id } }); 
      res.status(200).json({ message: "Usuario deleted" }); 
    } catch (error: any) { 
      res.status(500).json({ message: "Error deleting usuario", error }); 
    } 
};