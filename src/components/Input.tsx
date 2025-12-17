import React, { forwardRef, useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, ...props }, ref) => {
    const generatedId = useId();
    const inputId = props.id || generatedId;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="font-inter text-sm">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full p-2 
            bg-white
            border border-black 
            rounded-xs
            text-black placeholder:text-gray-400
            outline-none
            shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
            focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
