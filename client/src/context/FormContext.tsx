import { createContext, useContext, useState, type ReactNode } from "react";
import type { FormContextType, Language, Role } from "../types/auth.types";

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [role, setRole] = useState<Role | null>(null);
    const [language, setLanguage] = useState<Language | null>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [farmName, setFarmName] = useState("");
    const [produce, setProduce] = useState("");

  return (
    <FormContext.Provider
      value={{
        role,
        language,
        name,
        phone,
        location,
        farmName,
        produce,
        setRole,
        setLanguage,
        setName,
        setPhone,
        setLocation,
        setFarmName,
        setProduce,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used inside a FormProvider");
  }
  return context;
};
