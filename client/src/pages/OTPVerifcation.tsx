import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";
import OtpInput from "../components/OTPInput";
import OtpTimerResend from "../components/OTPTimer";
import { resendOTP, verifyOTP } from "../services/auth.services";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { Leaf } from "lucide-react";

const OTPVerification = () => {
  const { title, subtitle } = HEADING_TEXT.OTPDetails;
  const [loading, setLoading] = useState(false);
  const {phone} = useFormContext()
  const [otp, setOtp] = useState('')
  const [resetTrigger, setResetTrigger] = useState(0);
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await verifyOTP(phone, otp);
      toast.success("OTP verification success");
      navigate("/home");
    } catch (err) {
      toast.error((err as Error).message || "Something went wrong");
      // alert((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await resendOTP(phone);
      toast.success("OTP resent successfully");
      setResetTrigger((prev) => prev + 1); 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Failed to resend OTP");
    }
  };

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

          <OtpInput onChange={setOtp} resetTrigger={resetTrigger} />
          {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
              <Leaf className="w-20 h-20 text-green-600 animate-spin" />
            </div>
          )}
          <OtpTimerResend duration={30} onResend={handleResend} />
        </div>

        <Button disabled={!otp} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default OTPVerification;
