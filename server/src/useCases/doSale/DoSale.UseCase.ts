import { IProduct } from "../../models/product";
import { ISale } from "../../models/sale";
import { IProductRepository } from "../../repositories/IProductRepository";
import { ISaleRepository } from "../../repositories/ISaleRepository";

export class DoSaleUseCase {
  constructor(
    private productRepository: IProductRepository,
    private saleRepository: ISaleRepository
  ) { }

  async execute(sale: ISale): Promise<boolean> {
    let response = false;
    try {
      if (sale.objectJson.length > 2 && sale.total >= 0) {
        const products: IProduct[] = JSON.parse(sale.objectJson.replace(/\'/gi, '"'));
      
        const saleForProductRepository: Array<{ _id: string, quantity: number }> = []
        products.forEach(product => {
          saleForProductRepository.push({ _id: product._id || '', quantity: product.quantity })
        });
      
        const productUpdated = await this.productRepository.doSale(saleForProductRepository);
        const saleSaved = await this.saleRepository.saveSale(sale);
        if (productUpdated && saleSaved) {
          response = true;
        } else {
          response = false;
        }
        
      } else {
        response = false;
      }
    } catch (error) {
      throw new Error(`Ha ocurrido un error al intentar almacenar la compra.. ${error}`);
    }
    return response;
  }
}