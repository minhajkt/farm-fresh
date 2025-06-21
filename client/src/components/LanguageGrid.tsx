import { useState } from "react";
import LanguageCard from "./LanguageCard";

const languages = [
  { icon: "EN", label: "English" },
  { icon: "த", label: "தமிழ்" },
  { icon: "മ", label: "മലയാളം" },
  { icon: "ಕ", label: "ಕನ್ನಡ" },
  { icon: "क", label: "हिन्दी" },
  { icon: "త", label: "తెలుగు" },
];

const LanguageGrid = () => {
    const [selectedLang, setSelectedLang] = useState("");
    const handleLanguage = (label: string) => {
      setSelectedLang(label);
    };
  return (
    <div className="grid grid-cols-2 gap-4">
      {languages.map((lang, index) => (
        <div
          key={index}
          onClick={() => handleLanguage(lang.label)}
          className="cursor-pointer hover-zoom"
        >
          <LanguageCard
            icon={lang.icon}
            label={lang.label}
            selected={selectedLang === lang.label}
          />
        </div>
      ))}
    </div>
  );
};

export default LanguageGrid;
