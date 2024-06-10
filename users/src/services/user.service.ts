import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser, User } from '../schemas/user.schema';
import { Neighborhood } from '../schemas/neighborhood.schema';
import mongoose from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<IUser>,
    @InjectModel(Neighborhood.name) private neighborhoodModel: Model<any>, // Adjust as needed
  ) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {

    const hardcodedUser = new this.userModel({
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'testpassword',
      profileImage: 'profile.jpg',
      bio: 'This is a test user.',
      joinedDate: new Date()
    });

    console.log("Created Hardcoded User: ", hardcodedUser);
    return hardcodedUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find().populate('neighborhoodId').exec();
  }

  async findOne(id: string): Promise<IUser | null> {
    return this.userModel.findById(id).populate('neighborhoodId').exec();
  }
}
