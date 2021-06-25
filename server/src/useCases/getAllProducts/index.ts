import { MongoDBProductRepository } from "../../repositories/implementations/MongoDBProductRepository";
import { IProductRepository } from "../../repositories/IProductRepository";
import { GetAllProductsController } from "./GetAllProducts.controller";
import { GetAllProductsUseCase } from "./GetAllProducts.useCase";

const productRepository: IProductRepository = new MongoDBProductRepository();

const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);

export { getAllProductsController }