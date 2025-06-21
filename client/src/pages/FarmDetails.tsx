import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

const FarmDetails = () => {
  const { title, subtitle } = HEADING_TEXT.farmDetails;

  return (
    <div className="min-h-screen sm:bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-0 sm:px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 sm:shadow-md rounded-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <ProgressBar toCompletePercent={60} />
          <Heading title={title} subtitle={subtitle} />

          <div className="mt-4 flex justify-center">
            <form className="space-y-5 mt-4 w-full max-w-3xl">
              <InputField placeholder="Enter your name here" />
              <InputField placeholder="Enter your farm name here" />
              <SelectField
                placeholder="Select your farm location"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10z"
                    />
                  </svg>
                }
                options={[
                  { label: "Bangalore", value: "bangalore" },
                  { label: "Hyderabad", value: "hyderabad" },
                  { label: "Pune", value: "pune" },
                  { label: "Other", value: "other" },
                ]}
              />
              <InputField
                type="tel"
                placeholder="Enter your phone number (for OTP verification)"
              />
              <SelectField
                placeholder="Type of Produce"
                options={[
                  { value: "vegetables", label: "Vegetables" },
                  { value: "fruits", label: "Fruits" },
                  { value: "grains", label: "Grains" },
                  { value: "herbs", label: "Herbs" },
                ]}
              />
            </form>
          </div>
        </div>

        <Button />
      </div>
    </div>
  );
};

export default FarmDetails;
