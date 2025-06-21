import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  phone: string;
  role: "buyer" | "farmer";
  language: string;

  farmName?: string;
  produce?: string ;

  location: string;
  isVerified: boolean;
  otp?: string;
  otpExpires?: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: ["Buyer", "Farmer"], required: true },
    language : {type : String, enum : ['English', 'Hindi', 'Malayalam', 'Tamil'], default : 'English'},
    location: {
      type: String,
      enum: ["Calicut", "Kochi", "Trivandrum"],
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
