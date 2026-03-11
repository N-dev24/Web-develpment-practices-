import { RequestHandler, Request, Response } from "express";
import { Empresa } from "../models/empresa"; 

// Create new Empresa
export const createEmpresa: RequestHandler = (req: Request, res: Response): any => { 
  if (!req.body) { 
    return res.status(400).json({ status: "error", message: "Content can not be empty", payload: null }); 
  } 
   
  const empresa = { ...req.body }; 
  Empresa.create(empresa) 
    .then((data: Empresa | null) => { 
      res.status(200).json({ status: "success", message: "Empresa successfully created", payload: data }); 
    }) 
    .catch((err: any) => { 
       res.status(500).json({ status: "error", message: "Something happened creating an empresa. " + err.message, payload: null }); 
    }); 
}; 

// Get all Empresas
export const getAllEmpresas: RequestHandler = (req: Request, res: Response): any => { 
   Empresa.findAll() 
   .then((data: Empresa[]) => { 
      return res.status(200).json({ status: "success", message: "Empresas successfully retrieved", payload: data }); 
    }) 
    .catch((err: any) => { 
       return res.status(500).json({ status: "error", message: "Something happened retrieving all empresas. " + err.message, payload: null }); 
  }); 
}; 

// Get Empresa by Id 
export const getEmpresaById: RequestHandler = (req: Request, res: Response): any => { 
  Empresa.findByPk(req.params.id as any) 
  .then((data: Empresa | null) => { 
    return res.status(200).json({ status: "success", message: "Empresa successfully retrieved", payload: data }); 
  }) 
  .catch((err: any) => { 
    return res.status(500).json({ status: "error", message: "Something happened retrieving the empresa. " + err.message, payload: null }); 
  }); 
}; 

// Modify Empresa 
export const modifyEmpresa: RequestHandler = (req: Request, res: Response): any => { 
  if (!req.body) { 
    return res.status(400).json({ status: "error", message: "Content can not be empty.", payload: null }); 
  } 

  Empresa.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated[0] > 0) { // Sequelize update returns an array, the first element is the number of rows affected
      return res.status(200).json({ status: "success", message: "Empresa successfully updated", payload: { ...req.body } }); 
    } else { 
      return res.status(500).json({ status: "error", message: "Something happened updating the empresa. ", payload: null }); 
   } 
  }) 
  .catch((err: any) => { 
    res.status(500).json({ status: "error", message: "Something happened updating an empresa. " + err.message, payload: null }); 
  }); 
}; 

// Delete Empresa
export const deleteEmpresa: RequestHandler = async (req: Request, res: Response): Promise<any> => { 
    const { id } = req.body; 
    try { 
      await Empresa.destroy({ where: { id } }); 
      res.status(200).json({ message: "Empresa deleted" }); 
    } catch (error: any) { 
      res.status(500).json({ message: "Error deleting empresa", error }); 
    } 
};