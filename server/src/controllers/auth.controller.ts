import { Request, Response } from "express";
import { IAuthService } from "../services/auth/IAuthService";

export class AuthController {
  private authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.authService.registerUser(req.body);
      res.status(201).json({ success: true, user });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
  

  async verifyOtp(req: Request, res: Response): Promise<void> {
    const { phone, otp } = req.body;

    try {
      const user = await this.authService.verifyOtp(phone, otp);
      res.status(200).json({ success: true, user });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async resendOtp(req: Request, res: Response): Promise<void> {
    try {
      console.log('recieved req')
      const { phone } = req.body;
      if (!phone) {
        res
          .status(400)
          .json({ success: false, message: "Phone number is required" });
        return;
      }

      await this.authService.resendOtp(phone);
      res
        .status(200)
        .json({ success: true, message: "OTP resent successfully" });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}
