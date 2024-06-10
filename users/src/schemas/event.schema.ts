import { Schema, model, Document } from 'mongoose';

interface IEvent extends Document {
  ownerId: Schema.Types.ObjectId;
  name: string;
  description: string;
  date: Date;
  time: string;
  location: string; 
  images: string[];
  createdDate: Date;
  updatedDate: Date;
  neighborhoodId: Schema.Types.ObjectId;
}

const EventSchema = new Schema<IEvent>({
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  date: Date,
  time: String,
  location: String,
  images: [String],
  createdDate: { type: Date, default: Date.now },
  updatedDate: Date,
  neighborhoodId: { type: Schema.Types.ObjectId, ref: 'Neighborhood' }
});

export const Event = model<IEvent>('Event', EventSchema);
