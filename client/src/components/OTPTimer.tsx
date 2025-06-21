import { useEffect, useState } from "react";
import type { timerProps } from "../types/auth.types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const OtpTimerResend = ({ duration = 30, onResend }: timerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = async () => {
    if (!canResend) return;

    console.log("Attempting to resend OTP...");

    try {
      if (onResend) {
        await onResend(); 
        toast.success("OTP resent successfully");
        setTimeLeft(duration);
        setCanResend(false);
      } else {
        console.warn("No onResend function provided!");
      }
    } catch (err) {
      toast.error("Failed to resend OTP");
      console.error("Error resending OTP:", err);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins} : ${secs}`;
  };

  return (
    <div className="flex flex-col items-center text-sm text-gray-600 mt-6">
      <span>{formatTime(timeLeft)}</span>
      <button
        onClick={handleResend}
        disabled={!canResend}
        className={`mt-4 ${
          canResend ? "text-gray-600" : "text-gray-400 cursor-not-allowed"
        }`}
      >
        Didn’t receive OTP?{" "}
        <span
          className={canResend ? "text-blue-600 font-medium cursor-pointer" : "text-gray-400"}
        >
          Resend OTP
        </span>
      </button>
    </div>
  );
};

export default OtpTimerResend;
