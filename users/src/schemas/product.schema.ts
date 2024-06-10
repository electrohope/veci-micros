import mongoose, { Schema, Document, model } from 'mongoose';

export interface IProduct extends Document {
  ownerId: string; 
  //ownerId: Schema.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  quantity: number;
  type: string;
  images: string[];
  createdDate: Date;
  updatedDate: Date;
  //neighborhoodId: Schema.Types.ObjectId;
  neighborhoodId: string;
}

export const ProductSchema = new Schema<IProduct>({
  ownerId: String,
  //ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  price: Number,
  quantity: Number,
  type: String,
  images: [String],
  createdDate: { type: Date, default: Date.now },
  updatedDate: Date,
  //neighborhoodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Neighborhood', required: true }
  neighborhoodId: String
}, { collection: 'products' });

export const Product = model<IProduct>('Products', ProductSchema);
