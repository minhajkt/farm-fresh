import { useState } from "react";
import Button from "../components/Button";
import LanguageGrid from "../components/LanguageGrid";
import ProgressBar from "../components/ProgressBar";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";

const LanguageSelection = () => {
    const [selected, setSelected] = useState('')
    const { title, subtitle } = HEADING_TEXT.languageSelection;
  return (
    <div className="min-h-screen sm:bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 sm:shadow-md rounded-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <ProgressBar toCompletePercent={75} />
          <Heading title={title} subtitle={subtitle} />
          <LanguageGrid selectedLang={selected} onSelect={setSelected} />
        </div>
        <Button disabled={!selected} />
      </div>
    </div>
  );
};

export default LanguageSelection;
