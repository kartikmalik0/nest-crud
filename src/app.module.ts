import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kartik:ankit565632h@crud-test.aexaz.mongodb.net/?retryWrites=true&w=majority&appName=crud-test',
    ),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
