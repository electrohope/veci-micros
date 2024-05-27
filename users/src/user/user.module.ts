import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { VeciMongoModule } from 'src/shared/veci.mongo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    VeciMongoModule,
    TypeOrmModule.forFeature([User]), // Add User entity here 
  ], 
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
