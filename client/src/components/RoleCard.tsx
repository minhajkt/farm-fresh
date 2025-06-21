import type { RoleCardProps } from "../types/auth.types";

const RoleCard = ({ image, label, selected, onClick }: RoleCardProps) => {
  return (
    <div
      className={`border rounded-xl p-1 flex flex-col items-center cursor-pointer transition-all duration-200  hover-zoom ${
        selected ? "border-green-500 shadow-md" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      <img src={image} alt={label} className="w-40 sm:w-100 h-30 sm:h-60 mb-3 rounded-xl" />
      <p
        className={`font-medium ${
          selected ? "font-semibold" : "text-gray-800"
        }`}
      >
        I’m a {label}
      </p>
    </div>
  );
};

export default RoleCard;
