import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  farmer: mongoose.Types.ObjectId;
  item: string
  price: number;
  // description?: string;
  imageUrl?: string;
}

const productSchema = new Schema<IProduct>(
  {
    farmer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    item: { type: String, required: true },
    price: { type: Number, required: true },
    // description: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;
