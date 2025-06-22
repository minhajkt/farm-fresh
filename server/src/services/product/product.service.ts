import { IProductRepository } from "../../repositories/products/IProductRepository";
import ProductRepository from "../../repositories/products/product.repository";

export class ProductService {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository = ProductRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return await this.productRepository.findAllWithFarmerDetails();
  }
}
