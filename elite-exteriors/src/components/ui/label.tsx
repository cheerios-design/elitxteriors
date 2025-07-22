import { LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: "default" | "small" | "large";
  required?: boolean;
  error?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      variant = "default",
      required = false,
      error = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          // Base styles
          "block font-medium transition-colors duration-200",

          // Variants
          {
            "text-sm text-neutral-700": variant === "default" && !error,
            "text-xs text-neutral-600": variant === "small" && !error,
            "text-base text-neutral-800": variant === "large" && !error,
          },

          // Error state
          {
            "text-red-600": error,
          },

          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && (
          <span className={cn("ml-1", error ? "text-red-500" : "text-red-400")}>
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
