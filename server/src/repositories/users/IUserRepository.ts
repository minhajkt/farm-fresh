import { IUser } from "../../models/User";

export interface IUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser>;
  findByPhone(phone: string): Promise<IUser | null>;
  updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null>;
  updateOtp(phone: string, otp: string, otpExpires:Date): Promise<void>;
}