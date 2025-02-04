import { FC, ReactNode } from "react";

interface BtnType {
  title: string | ReactNode;
  color?: string;
  colorText?: string;
  size?: "sm" | "md" | "lg" | "round";
  hoverColor?: string;
  hoverColorText?: string;
  onClick?: () => void;
  isAvailable?: boolean;
};

export const Button: FC<BtnType> = ({
  title,
  color = "bg-zinc-200",
  colorText ,
  size = "md",
  hoverColor,
  hoverColorText = "hover:text-white",
  onClick,
  isAvailable,
}) => {
  const baseStyles = "text-white font-medium rounded-2xl focus:outline-none";
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    round: "w-8 h-8 rounded-full flex items-center justify-center",
  };
  const btnStyle = `
  ${baseStyles} и
  ${sizeStyles[size] || ""} 
  ${color || ""} 
  ${colorText || ""} 
  ${!isAvailable && hoverColor ? hoverColor : ""}
  ${!isAvailable && hoverColorText ? hoverColorText : ""}
`.trim();

  return (
    <button className={btnStyle} onClick={onClick} disabled={isAvailable}>
      {title}
    </button>
  );
};