import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "transparent" | "lime" | "black";

interface ButtonProps {
  type?: "button" | "submit",
  className: string,
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void,
  children: ReactNode,
  href?: string, 
  variant: ButtonVariant,
  ariaLabel: string,
}

export const Button: React.FC<ButtonProps> = ({ type, className, onClick, children, href, variant, ariaLabel }) => {
  const variantClassesMap: Record<ButtonVariant, string> = {
    transparent: "bg-transparent text-black border-black hover:bg-white hover:text-black",
    lime: "bg-lime text-black border-lime hover:bg-black hover:text-white",
    black: "bg-black text-white border-black hover:bg-lime hover:text-black"
  };

  const variantClasses = variantClassesMap[variant];
  if (type === "submit") {
    return (
      <button type={type} className={`${className} ${variantClasses}`} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href ?? "#"} passHref>
      <a className={`${className} ${variantClasses}`} onClick={onClick} aria-label={ariaLabel}>{children}</a>
    </Link>
  );
};
