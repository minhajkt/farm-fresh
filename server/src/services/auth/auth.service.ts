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
  async registerUser(userData: Partial<IUser>): Promise<IUser | null> {
    try {
      const { phone } = userData;
      if (!phone) throw new Error("Phone number is required");
      const formattedPhone = `+91${phone}`;

      const existingUser = await this.userRepository.findByPhone(
        formattedPhone
      );
      if (existingUser) {
        throw new Error("Phone number already registered");
      }

      const otp = generateOtp();

      await sendOtp(phone, otp);
      const newUser = await this.userRepository.createUser({
        ...userData,
        otp,
      });

      return newUser;
    } catch (error: any) {
      if (error.code === 11000 && error.message.includes("phone")) {
        console.error("Registration error:", error);
        throw new Error("Phone number already registered");
      } else if (error.code === 21608 && error.message.includes("unverified")) {
        throw new Error("Phone number is invalid or unverfied");
      }
      throw error;
    }
  }

  async verifyOtp(phone: string, otp: string): Promise<IUser | null> {
    try {
      const formattedPhone = `+91${phone}`;
      const user = await this.userRepository.findByPhone(formattedPhone);
      if (!user) throw new Error("User not found");

      if (user.otp !== otp) {
        throw new Error("Invalid OTP");
      }

      user.isVerified = true;
      user.otp = undefined;
      const updatedUser = await this.userRepository.updateUser(
        user._id as string,
        {
          isVerified: true,
          otp: undefined,
        }
      );

      return updatedUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async resendOtp(phone: string): Promise<void> {
    const formattedPhone = `+91${phone}`;
    console.log("Looking for user with phone:", formattedPhone);

    const user = await this.userRepository.findByPhone(formattedPhone);
    if (!user) {
      throw new Error("User not foundd");
    }

    const otp = generateOtp();
    await sendOtp(formattedPhone, otp);

    await this.userRepository.updateOtp(formattedPhone, otp);
  }
}
