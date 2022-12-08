import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { threadId } from 'worker_threads';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}

  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto)
  }

  findAll() {
    return this.productModel.find()
  }

  findOne(id: String) {
    return this.productModel.findById({_id:id});
  }

  update(id: String, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate({_id:id},{$set:{updateProductDto}})
  }

  remove(id: String) {
    return this.productModel.findByIdAndDelete({_id:id})
  }
}
