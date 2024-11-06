import Link from "next/link";

export const Button = ({ type, className, onClick, children, href }) => {
  if (type === "submit") {
    return (
      <button type="submit" className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} passHref>
      <a className={className}></a>
    </Link>
  );
};
