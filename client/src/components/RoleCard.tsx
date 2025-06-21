interface RoleCardProps {
  image: string;
  label: string;
  selected?: boolean;
  onClick: () => void;
}

const RoleCard = ({ image, label, selected, onClick }: RoleCardProps) => {
  return (
    <div
      className={`border rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all duration-200 ${
        selected ? "border-yellow-500 shadow-md" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      <img src={image} alt={label} className="w-20 h-20 mb-3" />
      <p
        className={`font-medium ${
          selected ? "text-yellow-600 font-semibold" : "text-gray-800"
        }`}
      >
        I’m a {label}
      </p>
    </div>
  );
};

export default RoleCard;
