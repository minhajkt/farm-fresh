import type { AxiosError } from "axios";
import api from "../api/axios";
import type { RegisterData } from "../types/auth.types";


export const registerUser = async (data: RegisterData) => {
  try {
    // console.log("sending reg request", data);
    const response = await api.post("/auth/register", data);
    // console.log("Received response:", response.data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{
      message?: string;
      errors?: { msg: string }[];
    }>;
    console.log("Error occurred during registration:", err.response?.data);
    const errorList = err.response?.data?.errors;
    if (errorList && errorList.length > 0) {
      throw new Error(errorList[0].msg); 
    }

    const message = err.response?.data?.message || "Registration failed.";
    throw new Error(message);
  }
};

export const verifyOTP = async (phone: string, otp: string) => {
  try {
    const response = await api.post("/auth/verify-otp", { phone, otp });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    // console.log("Error occurred during otp verification:", err.response?.data);
    const message = err.response?.data?.message || "OTP verification failed.";
    throw new Error(message);
  }
};

export const resendOTP = async (phone: string) => {
  try {
    console.log('sending resedn otp request')
    const response = await api.post("/auth/resend-otp", { phone });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    console.log('err', err)
    const message = err.response?.data?.message || "Failed to resend OTP.";
    throw new Error(message);
  }
};