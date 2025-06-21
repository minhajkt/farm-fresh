interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ disabled = false, onClick }: ButtonProps) => (
  <div className="fixed bottom-3 left-0 right-0 sm:static pt-10 mb-3 sm:mb-5 px-4 sm:px-0">
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full sm:w-[300px] mx-auto bg-yellow-400 text-black font-semibold py-3 rounded-full block transition-all
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500 cursor-pointer"}
        `}
    >
      Continue
    </button>
  </div>
);

export default Button;

