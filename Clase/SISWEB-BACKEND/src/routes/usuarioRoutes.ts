import { Router } from 'express';
import { createUsuario, getAllUsuarios, deleteUsuario } from '../controler/usuarioControler';

const usuarioRouter: Router = Router();

usuarioRouter.get('/', getAllUsuarios);  
usuarioRouter.post('/', createUsuario);  
usuarioRouter.delete('/', deleteUsuario);

export default usuarioRouter;