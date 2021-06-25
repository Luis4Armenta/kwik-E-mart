import { Request, Response } from "express";
import { GetAllProductsUseCase } from "./GetAllProducts.useCase";

export class GetAllProductsController {
  constructor(
    private readonly getAllProductsUseCase: GetAllProductsUseCase
  ) {  }

  async handle (request: Request, response: Response): Promise<Response> {
    const products = await this.getAllProductsUseCase.execute()
    return response.status(200).json(products);
  }
}