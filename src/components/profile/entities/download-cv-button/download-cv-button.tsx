import { cn } from "@/shared/libs/utils"
import React, { ComponentProps, FC } from "react";
import { BiSolidDownload } from "react-icons/bi";

export type DownloadCvButtonProps = Omit<ComponentProps<"button">, "className"> & {
  classes?: {
    container?: string,
    button?: string,
    icon?: string
  }
};

export const DownloadCvButton: FC<DownloadCvButtonProps> = (props) => {
  const { classes, onClick, ...rest } = props;

  return (
    <div className={cn("flex group", classes?.container)}>
      <button
        onClick={onClick}
        className={cn(
          "bg-indigo-600 hover:bg-indigo-700",
          "w-full",
          "rounded-lg rounded-r-none",
          "font-bold",
          "text-white",
          "px-4 py-3",
          classes?.container
        )}
        {...rest}
      />
      <button
        onClick={onClick}
        className={cn(
          "px-5 py-3",
          "bg-indigo-700 hover:bg-indigo-800",
          "text-white",
          "rounded-lg rounded-l-none",
          classes?.button
        )}
        children={<BiSolidDownload />}
      />
    </div>
  );
};
