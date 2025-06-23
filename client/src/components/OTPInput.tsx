import { useEffect, useRef, useState } from "react";
import type { OtpInputProps } from "../types/auth.types";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OtpInput = ({ length = 4, onChange,value = "", resetTrigger = 0 }: OtpInputProps) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const cleared = Array(length).fill("");
    setOtp(cleared);
    onChange?.("");
    inputsRef.current[0]?.focus();
  }, [resetTrigger, length]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange?.(newOtp.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      ))}
    </div>
  );
};

export default OtpInput;
