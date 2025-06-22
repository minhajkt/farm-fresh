import { IProduct } from "../../models/Product";

export interface IProductService {
  getAllProducts(): Promise<IProduct[]>;
}