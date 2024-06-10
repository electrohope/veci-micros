import mongoose, { Schema, Document, model, Model } from 'mongoose';

export interface INeighborhood extends Document {
  name: string;
  city: string;
  state: string;
  country: string;
  description?: string;
  createdDate: Date;
}

const NeighborhoodSchema = new Schema<INeighborhood>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String },
  createdDate: { type: Date, default: Date.now }
}, { collection: 'neighborhoods' });

export const Neighborhood: Model<INeighborhood> = model<INeighborhood>('Neighborhood', NeighborhoodSchema);
export { NeighborhoodSchema };
