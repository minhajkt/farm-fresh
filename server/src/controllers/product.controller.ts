import { Request, Response } from "express";
import { ProductService } from "../services/product/product.service";
import { IProductService } from "../services/product/IProductService";

export class ProductController {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

    async getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

}