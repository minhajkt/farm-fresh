import { IProduct } from "../../models/Product";

export interface IProductRepository {
  findAllWithFarmerDetails(): Promise<IProduct[]>;
}