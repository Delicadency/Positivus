import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "transparent" | "lime" | "black";

interface ButtonProps {
  type?: string,
  className: string,
  onClick: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void,
  children: ReactNode,
  href: string,
  variant: ButtonVariant,
}

export const Button:React.FC<ButtonProps> = ({ type, className, onClick, children, href, variant }) => {
  const variantClasses = {
    transparent: "bg-transparent text-black border-black hover:bg-white hover:text-black",
    lime: "bg-lime text-black border-lime hover:bg-black hover:text-white",
    black: "bg-black text-white border-black hover:bg-lime hover:text-black"
  }

  if (type === "submit") {
    return (
      <button type="submit" className={className + variant} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} passHref>
      <a className={className} onClick={onClick}>{ children }</a>
    </Link>
  );
};
