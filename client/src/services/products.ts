import { AxiosError } from "axios";
import api from "../api/axios";

export const getProducts = async () => {
  try {
    const response = await api.get("/products"); 
    // console.log('prod res', response)
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{
      message?: string;
      errors?: { msg: string }[];
    }>;

    console.error(
      "Error occurred while fetching products:",
      err.response?.data
    );

    const errorList = err.response?.data?.errors;
    if (errorList && errorList.length > 0) {
      throw new Error(errorList[0].msg);
    }

    const message = err.response?.data?.message || "Failed to fetch products.";
    throw new Error(message);
  }
};
