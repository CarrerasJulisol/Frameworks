import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name:String

    @Prop()
    price:Number

    @Prop()
    stock:Number

    @Prop()
    image:String
}

export const ProductSchema = SchemaFactory.createForClass(Product)