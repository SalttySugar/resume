import { cn } from "@/shared/libs/utils";
import React, { ComponentProps, FC } from "react";

export type SectionProps = ComponentProps<"section">
export const Section: FC<SectionProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <section
      {...rest}
      className={cn(
        "p-7",
        "bg-white",
        "rounded-lg",
        "shadow",
        className
      )}
    />
  )
};
