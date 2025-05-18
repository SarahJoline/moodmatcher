type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ onClick, disabled = false }: ButtonProps) {
  return (
    <button
      className="
        bg-[#3aa9b6]
        text-white
        text-lg
        font-light
        px-6
        py-4
        rounded-md
        w-full
        max-w-xs
        mx-auto
        block
        disabled:opacity-50
        disabled:cursor-not-allowed
        transition
        cursor-pointer
        hover:bg-[#3294a0]"
      onClick={onClick}
      disabled={disabled}
    >
      Get Recommendations
    </button>
  );
}

export default Button;
