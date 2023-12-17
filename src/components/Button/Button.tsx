import { ButtonProps } from "./types";

const Button = ({ children, type = "button", ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      className="disabled:opacity-30 disabled:cursor-not-allowed w-full p-2 rounded-md flex items-center justify-center bg-white text-black"
    >
      {children}
    </button>
  );
};

export { Button };
