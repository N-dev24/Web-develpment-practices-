
import { Router, Request, Response } from 'express';  
import productRoutes from './productRoutes';  
import empresaRoutes from './empresaRoutes';

import usuarioRoutes from './usuarioRoutes';

const apiRouter:Router = Router();  

apiRouter.use('/product', productRoutes);

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 
