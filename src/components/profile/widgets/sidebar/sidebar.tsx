import React, { FC, ComponentProps } from "react";
import { ProfileCard, ProfileInfo, SkillsCard } from "../../features";
import { cn } from "@/shared/libs/utils";


export type SidebarProps = ComponentProps<"aside">
export const Sidebar: FC<SidebarProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <aside
      {...rest}
      className={cn(
        "space-y-5",
        className
      )}
    >
      <div className="space-y-5">
        <ProfileCard />
        <div className="px-4 sm:px-0 space-y-5">
          <ProfileInfo />
          <SkillsCard />
        </div>
      </div>
    </aside>
  );
}
