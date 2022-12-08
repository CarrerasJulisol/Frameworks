import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<UserDocument>){}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto)
  }

  findAll() {
    return this.usersModel.find();
  }

  findOne(id: String) {
    return this.usersModel.findById({_id:id})
  }

  update(id: String, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate({_id:id},{$set:{updateUserDto}})
  }

  remove(id: String) {
    return this.usersModel.findByIdAndDelete({_id:id})
  }
}
