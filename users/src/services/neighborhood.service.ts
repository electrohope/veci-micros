import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INeighborhood, Neighborhood } from '../schemas/neighborhood.schema';
import { CreateNeighborhoodDto } from '../dto/create-neighborhood.dto';

@Injectable()
export class NeighborhoodService {
  constructor(
    @InjectModel(Neighborhood.name) private neighborhoodModel: Model<INeighborhood>,
  ) {}

  async create(createNeighborhoodDto: CreateNeighborhoodDto): Promise<INeighborhood> {

    const harcodedNeighborhood = new this.neighborhoodModel({
      "name": "Harcoded Neighborhood",
      "country": "Argentina",
      "state": "Neuquen",
      "city": "Neuquen",
      "description": "Barrio en la ciudad de Neuquén"
    });
    //const createdNeighborhood = await this.neighborhoodModel.create(createNeighborhoodDto);
    return harcodedNeighborhood.save();
  }

  // Other CRUD methods can be defined here
}
