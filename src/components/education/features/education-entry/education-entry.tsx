import React, { ComponentProps, FC } from "react";
import { LuGraduationCap } from "react-icons/lu"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineCalendar } from "react-icons/ai"
import { Heading, TextWithHint } from "@/shared/ui";
import { cn } from "@/shared/libs/utils";

export type EducationEntryProps = ComponentProps<"div"> & {
  level: string,
  name: string,
  shortname: string,
  location: string,
  date: string,
  image: string,
}

export const EducationEntry: FC<EducationEntryProps> = (props) => {

  const {
    className,
    name,
    shortname,
    date,
    level,
    location,
    image,
    ...rest
  } = props;

  return (

    <div
      {...rest}
      className={cn(
        "flex flex-col md:flex-row md:space-x-4 w-full",
        className,
      )}
    >
      <div className="w-12 h-12 overflow-hidden rounded-lg flex items-center justify-center mb-4 md:mb-0">
        <img src={image} alt={name} />
      </div>
      <div className="w-full">
        <Heading
          as="h3"
          variant="h5"
          className="font-medium mb-1.5"
        >
          {level}
        </Heading>
        <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex space-x-5 mb-4 md:mb-0">
            <div className="flex items-center text-sm text-gray-400 font-medium">
              <LuGraduationCap className="text-lg mr-1.5" />
              <TextWithHint
                className="underline underline-offset-2"
                hint={name}
                children={shortname}
              />
            </div>
            <div className="flex items-center text-sm text-gray-400 font-medium">
              <SlLocationPin className="text-lg mr-1.5" />
              <span>{location}</span>
            </div>
          </div>
          <div className="space-y-1.5 text-sm font-medium">
            <div className="flex items-center text-gray-400">
              <AiOutlineCalendar className="mr-1.5" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
