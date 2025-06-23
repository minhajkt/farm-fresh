export interface RegisterData {
  name: string;
  phone: string;
  role: "Farmer" | "Buyer";
  location: string;
  language: string;
}

export type Role = "Farmer" | "Buyer";
export type Language = "English" | "Hindi" | "Malayalam" | "Tamil";


export interface FormData {
  role: Role | null;
  language: Language | null;
  name: string;
  phone: string;
  location: string;
  farmName?: string;
  produce?: string;
}

export interface FormContextType extends FormData {
  setRole: (role: Role) => void;
  setLanguage: (lang: Language) => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setLocation: (location: string) => void;
  setFarmName: (farmName: string) => void;
  setProduce: (produce: string) => void;
}

import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: ReactNode;
  error?: string;
  onBlur?: () => void;
}

export interface LanguageCardProps {
  icon: string;
  label: string;
  selected?: boolean;
}

export interface LanguageGridProps {
  selectedLang: string;
  onSelect: (label: string) => void;
}

export interface OtpInputProps {
  length?: number;
  onChange?: (value: string) => void;
  value?: string;
  resetTrigger?: number;
}

export interface timerProps {
  duration?: number;
  onResend?: () => Promise<void>;
}

export interface ProgressBarProps {
  toCompletePercent: number;
}

export interface RoleCardProps {
  image: string;
  label: string;
  selected?: boolean;
  onClick: () => void;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
  icon?: ReactNode;
}

export type ImgProps = {
  onImageLoad: () => void;
};

export interface Product {
  _id: string;
  item: string;
  price: number;
  imageUrl: string;
  farmer: {
    name:string;}
}
