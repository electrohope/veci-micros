import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  // Clear existing models to avoid conflicts
  Object.keys(mongoose.models).forEach(model => {
    delete mongoose.models[model];
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
