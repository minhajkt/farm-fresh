import { AuthController } from "../controllers/auth.controller";
import { UserRepository } from "../repositories/users/user.repository";
import { AuthService } from "../services/auth/auth.service";

export function createDependencies() {
  const userRepo = new UserRepository();
  const authService = new AuthService(userRepo);
  const authController = new AuthController(authService);

  return {
    authController,
  };
}
