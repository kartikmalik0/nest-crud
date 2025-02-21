import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserUpdateDto } from './userUpdate.dto';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async readUser(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async updateUser(id: string, data: UserUpdateDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  }

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
