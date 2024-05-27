import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({ // No async or ConfigService injection
      type: 'mongodb',
      url: process.env.MONGODB_URI || 'mongodb+srv://maxcampos:m123c456@veci-dev-cluster.46kwjlg.mongodb.net/?retryWrites=true&w=majority&appName=veci-dev-cluster', // Use env variable or default
      entities: [User], // Add other entities here if needed
      synchronize: true, // Set to false in production
    }),
  ],
  exports: [TypeOrmModule], // Export for other modules to use
})
export class VeciMongoModule {}
