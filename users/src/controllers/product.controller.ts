import { Controller, Post, Body, Req } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Types } from 'mongoose';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Req() req): Promise<any> {
    const mockOwnerId = "60c72b2f9b1e8b3f1c9f5f5e";
    return this.productService.create(createProductDto, mockOwnerId);
  }

  // Other CRUD endpoints can be defined here
}
