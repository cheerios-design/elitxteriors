import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline" | "filled";
  inputSize?: "sm" | "md" | "lg";
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant = "default",
      inputSize = "md",
      error = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles
          "flex w-full rounded-lg border transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-1",
          "placeholder:text-neutral-400",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50",

          // Variants
          {
            "border-neutral-300 bg-white focus:border-primary-500 focus:ring-primary-500/20":
              variant === "default" && !error,
            "border-2 border-neutral-300 bg-white focus:border-primary-500 focus:ring-primary-500/20":
              variant === "outline" && !error,
            "border-0 bg-neutral-100 focus:bg-white focus:ring-primary-500/20 focus:shadow-md":
              variant === "filled" && !error,
          },

          // Error state
          {
            "border-red-500 focus:border-red-500 focus:ring-red-500/20": error,
          },

          // Sizes
          {
            "px-3 py-1.5 text-sm": inputSize === "sm",
            "px-3 py-2 text-sm": inputSize === "md",
            "px-4 py-3 text-base": inputSize === "lg",
          },

          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
