import mongoose, { Schema } from "mongoose";
import { IUser } from "./model.interfaces";
const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String, required: true },
  permissions: { type: [String], required: true },
  mobile: { type: String },
});

UserSchema.methods.jwtObject = function () {
  const jwtObject = Object.assign({}, this.toJSON());
  delete jwtObject._id;
  delete jwtObject.password;
  delete jwtObject.__v;
  return jwtObject;
};

export default mongoose.model<IUser>("User", UserSchema);
