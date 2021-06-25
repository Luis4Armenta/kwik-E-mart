import { IProduct } from "../../models/product";
import Product from "../../models/product.model";
import { IProductRepository } from "../IProductRepository";

export class MongoDBProductRepository implements IProductRepository {
  async getAllProducts (): Promise<IProduct[]> {
    let products: IProduct[] = [];

    try {
      products = await Product.find({});
    } catch (error) {
      products = []
      throw new Error(`Ha ocurrido un error al obtener los productos..\n${error}`);
    }
    return products;
  }

  async doSale (products: [{ _id: string, quantity: number }]): Promise<boolean> {
    let response: boolean = false;
    
    try {
      products.forEach(async ({ _id, quantity }) => {
        const res = await Product.updateOne({ _id: _id }, { $inc: { quantity: -quantity } })
        if (!res.ok) {
          return false;
        }
      });
      response = true;
    } catch (error) {
      response = false;
      throw new Error(`Ha ocurrido un error al realizar la compra.. \n${error}`);
    }
    return response;
  }
}