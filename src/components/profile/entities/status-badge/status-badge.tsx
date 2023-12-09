import { cn } from "@/shared/libs/utils";
import React, { FC, ComponentProps } from "react";


export type StatusBadgeProps = ComponentProps<"span">;
export const StatusBadge: FC<StatusBadgeProps> = (props) => {
  const { className, ...rest } = props;
  return <span
    {...rest}
    className={cn(
      "py-0.5 px-2",
      "rounded-full",
      "font-bold",
      className
    )}
  />
};
