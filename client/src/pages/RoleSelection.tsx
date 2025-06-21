import { useState } from "react";
import ProgressBar from "../components/ProgressBar"; 
import RoleCard from "../components/RoleCard";

const roles = [
  { label: "Farmer", image: "/images/farmer.png" },
  { label: "Buyer", image: "/images/buyer.png" },
];

const ChooseRole = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="min-h-screen bg-white p-5 flex flex-col justify-between max-w-md mx-auto">
      <div>
        <ProgressBar toCompletePercent={60} />{" "}
        <h2 className="text-xl font-semibold text-center mt-6 mb-1">
          Choose Your Role
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Select your role to get the best experience.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {roles.map((role) => (
            <RoleCard
              key={role.label}
              label={role.label}
              image={role.image}
              selected={selected === role.label}
              onClick={() => setSelected(role.label)}
            />
          ))}
        </div>
      </div>

      <button
        className={`mt-8 bg-yellow-400 text-black font-semibold py-3 rounded-full transition-all ${
          !selected ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"
        }`}
        disabled={!selected}
      >
        Continue
      </button>
    </div>
  );
};

export default ChooseRole;
