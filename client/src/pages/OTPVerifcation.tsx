import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";
import OtpInput from "../components/OTPInput";
import OtpTimerResend from "../components/OTPTimer";

const OTPVerification = () => {
  const { title, subtitle } = HEADING_TEXT.OTPDetails;

  return (
    <div className="min-h-screen sm:bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-0 sm:px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 sm:shadow-md rounded-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <ProgressBar toCompletePercent={60} />
          <div className="flex justify-center mt-4 mb-0">
            <img
              src="/images/mob.png"
              alt="Logo"
              className="h-15 w-auto mt-2 "
            />
          </div>
          <Heading title={title} subtitle={subtitle} />

          {/* <div className="mt-4 flex justify-center"> */}
            <OtpInput />
            <OtpTimerResend />
            {/* <Button /> */}
          {/* </div> */}
        </div>

        <Button />
      </div>
    </div>
  );
};

export default OTPVerification;
