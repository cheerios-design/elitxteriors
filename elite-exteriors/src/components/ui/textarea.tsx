import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "outline" | "filled";
  textareaSize?: "sm" | "md" | "lg";
  error?: boolean;
  resize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = "default",
      textareaSize = "md",
      error = false,
      resize = true,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        className={cn(
          // Base styles
          "flex min-h-[80px] w-full rounded-lg border transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-1",
          "placeholder:text-neutral-400",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50",

          // Resize behavior
          resize ? "resize-y" : "resize-none",

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
            "px-3 py-1.5 text-sm": textareaSize === "sm",
            "px-3 py-2 text-sm": textareaSize === "md",
            "px-4 py-3 text-base": textareaSize === "lg",
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

Textarea.displayName = "Textarea";

export { Textarea };
