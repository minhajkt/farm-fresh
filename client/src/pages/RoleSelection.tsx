// import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import RoleCard from "../components/RoleCard";
import Button from "../components/Button";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";
import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { roles } from "../constants/roles";



const RoleSelection = () => {
  // const [selected, setSelected] = useState("");
  const { title, subtitle } = HEADING_TEXT.roleSelection;
  const { role, setRole } = useFormContext();
  console.log("Selected role:", role); 
  const navigate = useNavigate();

  const handleContinue = () => {
    if (role) {
      navigate("/user");
    }
  };

  return (
    <div className="min-h-screen sm:bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 sm:shadow-md rounded-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <ProgressBar toCompletePercent={60} />
          <Heading title={title} subtitle={subtitle} />
          <div className="grid grid-cols-2 gap-4">
            {roles.map((item) => (
              <RoleCard
                key={item.label}
                label={item.label}
                image={item.image}
                selected={role === item.label}
                onClick={() => setRole(item.label as "Farmer" | "Buyer")}
              />
            ))}
          </div>
        </div>

        <Button disabled={!role} onClick={handleContinue}/>
      </div>
    </div>
  );
};

export default RoleSelection;
