import { Model, model, Schema } from "mongoose";
import { IProduct } from "./product";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "You need a name"]
  },
  price: {
    type: Number,
    min: [0, 'You cannot have a negative number'],
    required: [true, "if you don't give me an amount then it doesn't exist"]
  },
  quantity: {
    type: Number,
    min: [0, 'You cannot have a negative number'],
    required: [true, "if you don't give me an amount then it doesn't exist"]
  }
});

const Product: Model<IProduct> = model('Product', productSchema);

export default Product;