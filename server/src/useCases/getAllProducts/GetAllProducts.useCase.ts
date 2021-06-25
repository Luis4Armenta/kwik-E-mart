import { IProduct } from "../../models/product";
import { IProductRepository } from "../../repositories/IProductRepository";

export class GetAllProductsUseCase {
  constructor(
    private readonly productRepository: IProductRepository,
  ) { }

  async execute(): Promise<IProduct[]> {
    return await this.productRepository.getAllProducts();
  }
}