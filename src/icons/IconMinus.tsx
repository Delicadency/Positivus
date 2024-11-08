import { IconProps } from "@/utils/types";

export const IconMinus = ({ className }: IconProps) => {
  return (
    <svg
      width="18"
      height="6"
      viewBox="0 0 18 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 5.64V0H17.76V5.64H0Z" fill="currentColor" />
    </svg>
  );
};
