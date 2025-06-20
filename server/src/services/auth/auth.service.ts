import { IUser } from "../../models/User";
import User from "../../models/User";
import { IUserRepository } from "../../repositories/users/IUserRepository";
import { generateOtp, sendOtp } from "../../utils/otp";
import { IAuthService } from "./IAuthService";

export class AuthService implements IAuthService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async registerUser(
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      const { phone } = userData;
      if (!phone) throw new Error("Phone number is required");

      const existingUser = await this.userRepository.findByPhone(phone);
      if (existingUser) {
        throw new Error("Phone number already registered") ;
      }

      const otp = generateOtp();
      const newUser = await this.userRepository.createUser({ ...userData, otp });

      await sendOtp(phone, otp);

      return newUser ;
    } catch (error: any) {
      console.error(error);
      throw error
    }
  }

  async verifyOtp(
    phone: string,
    otp: string
  ): Promise<IUser | null> {
    try {
        const user = await this.userRepository.findByPhone(phone);
        if (!user) throw new Error("User not found")
      
        if (user.otp !== otp) {
          throw new Error("Invalid OTP");
        }
      
        user.isVerified = true;
        user.otp = undefined;
        const updatedUser = await this.userRepository.updateUser((user._id as string), {
            isVerified: true,
            otp: undefined,})
      
        return updatedUser;
    } catch (error) {
        console.error(error);
        throw error
    }
  }
}
