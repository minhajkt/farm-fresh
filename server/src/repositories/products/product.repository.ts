import { BaseRepository } from "../common/base.repository";
import Product, { IProduct } from "../../models/Product";
import { IProductRepository } from "./IProductRepository";

class ProductRepository
  extends BaseRepository<IProduct>
  implements IProductRepository
{
  constructor() {
    super(Product);
  }

  async findAllWithFarmerDetails(): Promise<IProduct[]> {
    return await Product.find().populate("farmer", "name location produce");
  }
}

export default new ProductRepository();
