import type { LanguageCardProps } from "../types/auth.types";


const LanguageCard = ({ icon, label, selected }: LanguageCardProps) => {
  return (
    <div
      className={`flex items-center p-3 border rounded-xl transition-colors duration-200  ${
        selected ? "border-green-500" : "border-gray-200"
      }`}
    >
      <div className="bg-green-200 text-green-900 font-semibold text-sm px-3 py-2 rounded-lg">
        {icon}
      </div>
      <div className={`ml-3 text-gray-800 ${selected ? 'font-semibold' : 'font-medium'}`}>{label}</div>
    </div>
  );
};

export default LanguageCard;
