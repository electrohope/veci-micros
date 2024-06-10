import { Schema, model, Document } from 'mongoose';

interface IPost extends Document {
  userId: Schema.Types.ObjectId;
  content: string;
  type: string; // e.g., 'question', 'comment'
  createdDate: Date;
  updatedDate: Date;
  neighborhoodId: Schema.Types.ObjectId;
}

const PostSchema = new Schema<IPost>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  type: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date },
  neighborhoodId: { type: Schema.Types.ObjectId, ref: 'Neighborhood' }
});

export const Post = model<IPost>('Post', PostSchema);
