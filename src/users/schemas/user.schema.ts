import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop()
    name:String

    @Prop()
    lastName:String

    @Prop()
    age:Number

    @Prop({required:true,unique:true})
    email:String

    @Prop()
    password:String

    @Prop({type:mongoose.SchemaTypes.ObjectId,ref:'Cart'})
    cart:any
}

export const UserSchema = SchemaFactory.createForClass(User);