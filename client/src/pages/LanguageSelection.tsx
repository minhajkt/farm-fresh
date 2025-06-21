import Button from "../components/Button";
import LanguageGrid from "../components/LanguageGrid";
import ProgressBar from "../components/ProgressBar";

const LanguageSelection = () => {
  return (
    <div className="min-h-screen sm:bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 sm:shadow-md rounded-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <ProgressBar toCompletePercent={75}/>
          <h2 className="text-lg font-semibold text-center mt-4 mb-1">
            Select Your Language
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8 max-w-xs mx-auto px-3">
            Choose a language that’s comfortable for you. You can change this
            anytime in settings.
          </p>
          <LanguageGrid />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default LanguageSelection;
