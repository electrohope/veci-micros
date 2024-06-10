import { Controller, Post, Get, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { NeighborhoodService } from '../services/neighborhood.service';
import { CreateNeighborhoodDto } from '../dto/create-neighborhood.dto';
import { Response } from 'express';

@Controller('neighborhoods')
export class NeighborhoodController {
  constructor(private readonly neighborhoodService: NeighborhoodService) {}

  @Post()
  async create(@Body() createNeighborhoodDto: CreateNeighborhoodDto, @Res() res: Response): Promise<any> {
    try {
      console.log('Received DTO:', createNeighborhoodDto);
      const neighborhood = await this.neighborhoodService.create(createNeighborhoodDto);
      return res.status(HttpStatus.CREATED).json(neighborhood);
    } catch (error) {
      if (error.code === 11000) { // Duplicate key error
        return res.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: 'Neighborhood already exists',
          error: 'Conflict'
        });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
        error: 'Internal Server Error'
      });
    }
  }
}
