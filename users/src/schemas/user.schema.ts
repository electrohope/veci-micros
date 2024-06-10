import mongoose, { Schema, Document, model, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  bio?: string;
  joinedDate: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  bio: { type: String },
  joinedDate: { type: Date, default: Date.now }
}, { collection: 'users' });

export const User: Model<IUser> = model<IUser>('User', UserSchema);
export { UserSchema };
