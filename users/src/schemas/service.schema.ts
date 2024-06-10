import { Schema, model, Document } from 'mongoose';

interface IService extends Document {
  ownerId: Schema.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  availability: string;
  type: string;
  images: string[];
  createdDate: Date;
  updatedDate: Date;
  neighborhoodId: Schema.Types.ObjectId;
}

const ServiceSchema = new Schema<IService>({
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  price: Number,
  availability: String,
  type: String,
  images: [String],
  createdDate: { type: Date, default: Date.now },
  updatedDate: Date,
  neighborhoodId: { type: Schema.Types.ObjectId, ref: 'Neighborhood' }
});

export const Service = model<IService>('Service', ServiceSchema);
