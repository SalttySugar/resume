import { cn } from "@/shared/libs/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React, { ComponentProps, FC } from "react";


const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      h1: "text-3xl",
      h2: "text-2xl",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-md"
    }
  }
});

export type HeaderAsProps = "h1" | "h2" | "h3" | "h4" | "h5";
type HeadingVariantProps = VariantProps<typeof headingVariants>
export type HeadingProps = ComponentProps<HeaderAsProps>
  & Omit<HeadingVariantProps, "variant">
  & Required<Pick<HeadingVariantProps, "variant">> & {
    as: HeaderAsProps
  }

export const Heading: FC<HeadingProps> = (props) => {
  const {
    as: Component,
    className,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={cn(headingVariants({ className, ...rest }), className)}
    />
  );
}
