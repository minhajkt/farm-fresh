import type { InputFieldProps } from "../types/auth.types";

const InputField = ({
  placeholder,
  type = "text",
  icon,
  ...props
}: InputFieldProps) => (
  <div className="relative">
    <input
      type={type}
      placeholder={placeholder}
      className={`text-sm sm:text-base w-full border border-gray-300 rounded-md px-4 py-2 ${
        icon ? "pr-10" : ""
      }`}
      {...props}
    />
    {icon && (
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
    )}
  </div>
);

export default InputField;
