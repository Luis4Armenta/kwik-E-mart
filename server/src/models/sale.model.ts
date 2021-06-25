import { Model, model, Schema } from "mongoose";
import { ISale } from "./sale";

const saleSchema = new Schema({
  objectJson: String,
  total: Number,
});

const Sale: Model<ISale> = model('Sale', saleSchema);

export default Sale;
