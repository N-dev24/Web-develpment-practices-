
import { Router, Request, Response } from 'express';  
import productRoutes from './productRoutes';  

const apiRouter:Router = Router();  

apiRouter.use('/', productRoutes);

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 
