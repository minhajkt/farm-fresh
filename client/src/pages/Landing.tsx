import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-6" />{" "}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Welcome to FarmLink
      </h1>
      <p className="text-gray-600 mb-6">
        Connecting farmers directly to buyers.
      </p>
      <button
        className="bg-green-600 text-white px-6 py-2 rounded-full text-lg hover:bg-green-700 transition"
        onClick={() => navigate("/select-language")}
      >
        Continue
      </button>
    </div>
  );
}
