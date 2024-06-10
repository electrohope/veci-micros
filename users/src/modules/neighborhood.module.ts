import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NeighborhoodService } from '../services/neighborhood.service';
import { NeighborhoodController } from '../controllers/neighborhood.controller';
import { Neighborhood, NeighborhoodSchema } from '../schemas/neighborhood.schema';
import { User, UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Neighborhood.name, schema: NeighborhoodSchema }
    ])
  ],
  controllers: [NeighborhoodController],
  providers: [NeighborhoodService],
})
export class NeighborhoodModule {}
