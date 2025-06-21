import type { ProgressBarProps } from "../types/auth.types";


const ProgressBar = ({ toCompletePercent }: ProgressBarProps) => {
  const completed = 100 - toCompletePercent;

  return (
    <div className="w-full mb-8">
      <p className="text-xs text-gray-500 mb-2">Onboarding process</p>
      <p className="text-green-600 font-semibold text-sm mb-1">
        {toCompletePercent}% to complete
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2 relative">
        <div
          className="bg-green-500 h-2 rounded-full relative"
          style={{ width: `${completed}%` }}
        >
          <div
            className="absolute w-2 h-2 bg-white border border-green-500 rounded-full"
            style={{ left: `calc(100% - 4px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
  