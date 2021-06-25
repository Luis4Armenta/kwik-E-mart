import { IProduct } from "../models/product";

export interface IProductRepository {
  getAllProducts: () => Promise<IProduct[]>
  doSale: (products: Array<{ _id: string, quantity: number }> ) => Promise<boolean>
}