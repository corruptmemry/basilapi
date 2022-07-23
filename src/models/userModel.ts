import { Schema, model } from 'mongoose';
var findOrCreate = require('mongoose-findorcreate')

interface IUser {
  name: string;
  aboutText: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  aboutText: { type: String, required: true }
});
userSchema.plugin(findOrCreate);


export const User = model<IUser>('User', userSchema);