import cn from "@/utils";
import { cva , type VariantProps } from "class-variance-authority";

import React, { InputHTMLAttributes } from 'react'

export const inputcva = cva(["border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"], {
  variants: {
    intent: {
      primary: "bg-background text-foreground",
      outline: "bg-transparent text-foreground border border-muted",
    },
    inputSize: {
      small: "h-8 text-sm",
      medium: "h-10 text-md",
      large: "h-12 text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    inputSize: "medium",
  }
});

interface IProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputcva> {
}

const Input = ({ intent, inputSize, ...rest }: IProps) => {
    return (
        <input
            className={`${(inputcva({ intent, inputSize }))}`}
            {...rest}
        />
    )
}
export default Input