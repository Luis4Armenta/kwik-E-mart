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

  async doSale (products: Array<{ _id: string, quantity: number }>): Promise<boolean> {
    let response = false;
    
    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      
      const count = await Product.findById(product._id);
      
      if ((count != undefined && count.quantity) > 0) {
        await Product.updateOne({ _id: product._id }, { $inc: { quantity: -product.quantity } })
        response = true;
      } else {
        return false;
      }
    }
    return response;
  }
}