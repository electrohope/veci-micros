import { Module } from '@nestjs/common';
import { VeciMongoModule } from 'src/shared/veci.mongo.module'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user.module';
import { ProductModule } from './modules/product.module';
import { NeighborhoodModule } from './modules/neighborhood.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    ProductModule,
    NeighborhoodModule,
    VeciMongoModule
  ],
})
export class AppModule {}
