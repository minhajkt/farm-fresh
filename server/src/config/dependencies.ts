import { AuthController } from "../controllers/auth.controller";
import { ProductController } from "../controllers/product.controller";
import productRepository from "../repositories/products/product.repository";
import { UserRepository } from "../repositories/users/user.repository";
import { AuthService } from "../services/auth/auth.service";
import { ProductService } from "../services/product/product.service";

export function createDependencies() {
  const userRepo = new UserRepository();
  const authService = new AuthService(userRepo);
  const authController = new AuthController(authService);


  const productRepo = productRepository; 
  const productService = new ProductService(productRepo);
  const productController = new ProductController(productService);

  return {
    authController,
    productController
  };
}
