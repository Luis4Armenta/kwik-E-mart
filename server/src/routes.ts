import { Request, Response, Router } from "express";
import { getAllProductsController } from "./useCases/getAllProducts";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hola mundo');
});

router.get('/products', (req: Request, res: Response) => {
  return getAllProductsController.handle(req, res);
});


export default router;