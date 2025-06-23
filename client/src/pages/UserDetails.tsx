import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { HEADING_TEXT } from "../constants/headingText";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth.services";
import { toast } from "react-toastify"; 
import { useState } from "react";
import { Leaf } from "lucide-react";
import { validateName, validatePhone } from "../utils/validation";

const UserDetails = () => {
  const { title, subtitle } = HEADING_TEXT.userDetails;
  const [loading, setLoading] = useState(false)
  const { name, phone, location, setName, setPhone, setLocation, role, language } = useFormContext();
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const isValid =
    !validateName(name) && !validatePhone(phone) && !!location.trim();

  const navigate = useNavigate();

  const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;

  const handleSubmit = async () => {
    setLoading(true)
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);

    setNameError(nameErr);
    setPhoneError(phoneErr);

    if (nameErr || phoneErr || !location.trim()) {
      return; 
    }
    try {
      if (!role || !language) {
        toast.warn("Role and language are required");
        // alert("Role and language are required");
        return;
      }
      await registerUser({ name, phone:formattedPhone, location, role, language });
      toast.success("OTP sent successfully!");
      navigate("/otp");
    } catch (err) {
      toast.error((err as Error).message || "Something went wrong");
      // alert((err as Error).message || "Something went wrong");
    }finally {
      setLoading(false)
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
          {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
              <Leaf className="w-20 h-20 text-green-600 animate-spin" />
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <form className="space-y-5 mt-4 w-full max-w-3xl">
              <InputField
                placeholder="Enter your name here"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(validateName(e.target.value));
                }}
                onBlur={(e) => setNameError(validateName(e.target.value))}
                error={nameError}
              />
              <SelectField
                placeholder="Select your delivery location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                  { label: "Calicut", value: "Calicut" },
                  { label: "Kochi", value: "Kochi" },
                  { label: "Trivandrum", value: "Trivandrum" },
                ]}
              />
              <InputField
                type="tel"
                placeholder="Enter your phone number (for OTP verification)"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError(validatePhone(e.target.value));
                }}
                onBlur={(e) => setPhoneError(validatePhone(e.target.value))}
                error={phoneError}
              />
            </form>
          </div>
        </div>

        <Button disabled={!isValid} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default UserDetails;
