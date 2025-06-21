import { IUser } from "../../models/User";

export interface IAuthService {
  registerUser(data: Partial<IUser>): Promise<IUser | null>;
  verifyOtp(phone: string, otp: string): Promise<IUser | null>;
  resendOtp(phone: string): Promise<void>;
}
