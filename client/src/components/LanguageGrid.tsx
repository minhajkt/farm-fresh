import { languages } from "../constants/languages";
import type { LanguageGridProps } from "../types/auth.types";
import LanguageCard from "./LanguageCard";


const LanguageGrid = ({ selectedLang, onSelect }: LanguageGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {languages.map((lang, index) => (
        <div
          key={index}
          onClick={() => onSelect(lang.label)}
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
  