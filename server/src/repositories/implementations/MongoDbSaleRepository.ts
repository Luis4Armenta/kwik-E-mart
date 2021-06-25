import { ISale } from "../../models/sale";
import Sale from "../../models/sale.model";
import { ISaleRepository } from "../ISaleRepository";

export class MongoDBSaleRepository implements ISaleRepository {
  async saveSale(sale: ISale): Promise<boolean> {
    let response = false;
    try {
      const newSale = new Sale(sale)
      await newSale.save();
      response = true;
    } catch (error) {
      response = false
      throw new Error(`Ha ocurrido un error al guardar la compra.. \n${error}`);
    }
    
    return response;
  }
}