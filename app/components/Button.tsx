import { FC } from "react";

interface BtnType {
  title: string;
  color?: string; 
  size?: "sm" | "md" | "lg"; 
  hoverColor?: string; 
  onClick?: () => void; 
};

export const Button: FC<BtnType> = ({
  title,
  color = "bg-zinc-200",
  size = "md",
  hoverColor = "hover:bg-blue-600",
  onClick,
}) => {
  const baseStyles = "text-white font-medium rounded-2xl focus:outline-none";
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const btnStyle = `
  ${baseStyles} 
  ${sizeStyles[size] || ""} 
  ${color || ""} 
  ${hoverColor || ""}
`.trim();

  return (
    <button className={btnStyle} onClick={onClick}>
      {title}
    </button>
  );
};