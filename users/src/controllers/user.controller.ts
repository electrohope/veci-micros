import { Controller, Post, Get, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<any> {
    try {
      console.log('Received DTO:', createUserDto);
      const user = await this.userService.create(createUserDto);
      console.log('Created User:', user);
      return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
        error: 'Internal Server Error'
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<any> {
    try {
      const users = await this.userService.findAll();
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
        error: 'Internal Server Error'
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<any> {
    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'User not found',
          error: 'Not Found'
        });
      }
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
        error: 'Internal Server Error'
      });
    }
  }
}
