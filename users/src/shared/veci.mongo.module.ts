import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { Neighborhood, NeighborhoodSchema } from '../schemas/neighborhood.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://maxcampos:Test1234@veci-dev-clust.khwsccf.mongodb.net/?retryWrites=true&w=majority&appName=veci-dev-clust')
  ],
  exports: [MongooseModule],
})
export class VeciMongoModule {}
