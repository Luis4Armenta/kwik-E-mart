import { MongoDBProductRepository } from "../../repositories/implementations/MongoDBProductRepository";
import { MongoDBSaleRepository } from "../../repositories/implementations/MongoDbSaleRepository";
import { IProductRepository } from "../../repositories/IProductRepository";
import { ISaleRepository } from "../../repositories/ISaleRepository";
import { DoSaleController } from "./DoSale.controller";
import { DoSaleUseCase } from "./DoSale.UseCase";

const productRepository: IProductRepository = new MongoDBProductRepository();
const saleRepository: ISaleRepository = new MongoDBSaleRepository();

const doSaleUseCase = new DoSaleUseCase(productRepository, saleRepository);
const doSaleController = new DoSaleController(doSaleUseCase);

export { doSaleController };