import { Document } from "mongoose";

export interface ISale extends Document {
  _id?: string,
  objectJson: string,
  total: number
}