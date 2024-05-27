import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VeciMongoModule } from './shared/veci.mongo.module';

@Module({
  imports: [UserModule, VeciMongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
