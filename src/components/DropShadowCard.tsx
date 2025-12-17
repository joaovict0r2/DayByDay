import type { ReactNode } from "react";

interface DropShadowCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function DropShadowCard({ children, className, onClick }: DropShadowCardProps) {
  return (
    <div
      className={`w-10 h-10 rounded-sm drop-shadow-black drop-shadow-alt ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default DropShadowCard;
