import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IProduct, Product } from '../schemas/product.schema';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<IProduct>) {}

  async create(createProductDto: CreateProductDto, ownerId: string): Promise<IProduct> {
    //const mockOwnerId = new Types.ObjectId(ownerId); // Mocked ownerId
    const createdProduct = new this.productModel({ ...createProductDto, ownerId });
    console.log("created Product:", createdProduct);
    return createdProduct.save();
  }

  // Other CRUD methods can be defined here
}
