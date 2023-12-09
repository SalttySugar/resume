import { cn } from "@/shared/libs/utils";
import React, { ComponentProps, FC } from "react";

export type SkillTagProps = ComponentProps<"span">;
export const SkillTag: FC<SkillTagProps> = (props) => {
  const { className, ...rest } = props;
  return <span
    {...rest}
    className={cn(
      "rounded-md",
      "px-1.5 py-2",
      "bg-indigo-100 text-indigo-600",
      "hover:bg-indigo-200 text-indigo-700",
      "font-medium text-sm",
      "cursor-pointer",
      className
    )}
  />
};
