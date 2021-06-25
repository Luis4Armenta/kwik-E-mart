import { ISale } from "../models/sale";

export interface ISaleRepository {
  saveSale: (sale: ISale) => Promise<boolean>
}