import LanguageCard from "./LanguageCard";

const languages = [
  { icon: "EN", label: "English" },
  { icon: "த", label: "தமிழ்" },
  { icon: "മ", label: "മലയാളം" },
  { icon: "ಕ", label: "ಕನ್ನಡ" },
  { icon: "क", label: "हिन्दी" },
  { icon: "త", label: "తెలుగు" },
];
interface LanguageGridProps {
  selectedLang: string;
  onSelect: (label: string) => void;
}

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
  