import cn from "@/utils";
import { cva , type VariantProps } from "class-variance-authority";

import React, { ButtonHTMLAttributes } from 'react'

export const buttoncva = cva(["inline-flex items-center justify-center font-semibold cursor-pointer m-4 hover:bg-muted focus:outline-none"], {
  variants: {
    intent: {
        primary: "bg-primary text-color-foreground",
        outline: "bg-transparent text-color-foreground border border-color-primary",
    },
    size: {
        small: "px-2 h-8 text-sm",
        medium: "px-4 h-10 text-md",
        large: "px-6 h-12 text-lg",
    },
    fullWidth: {
        true: "w-full",
        false: "w-auto"
    },
    rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    },
},
    defaultVariants: {
        intent: "primary",
        size: "medium",
        fullWidth: false,
        rounded: "md"
    }
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttoncva> {
    children: React.ReactNode;
}

const Button = ({ children, intent, size, fullWidth, rounded, ...rest }: IProps) => {
    return (
        <button
            className={`${cn(buttoncva({ intent, size, fullWidth, rounded }))}`}
            {...rest}
        >
            {children}
        </button>
    )
}
export default Button