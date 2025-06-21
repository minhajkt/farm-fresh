import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import RoleCard from "../components/RoleCard";
import Button from "../components/Button";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";

const roles = [
  { label: "Farmer", image: "/images/rr.png" },
  { label: "Buyer", image: "/images/fff.png" },
];

const RoleSelection = () => {
  const [selected, setSelected] = useState("");
  const { title, subtitle } = HEADING_TEXT.roleSelection;

  return (
    <div className="min-h-screen sm:bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 sm:shadow-md rounded-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <ProgressBar toCompletePercent={60} />
          <Heading title={title} subtitle={subtitle}/>
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

        <Button disabled={!selected} />
      </div>
    </div>
  );
};

export default RoleSelection;
