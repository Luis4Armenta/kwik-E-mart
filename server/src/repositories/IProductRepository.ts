import { IProduct } from "../models/product";

export interface IProductRepository {
  getAllProducts: () => Promise<IProduct[]>
  doSale: (products: [{_id: string, quantity: number}]) => Promise<boolean>
}