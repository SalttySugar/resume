import React, { ComponentProps, FC } from "react";
import { SkillTag } from "@/components/profile/entities";
import { cn } from "@/shared/libs/utils";
import { useTranslation } from "react-i18next";


export type SkillsCardProps = ComponentProps<"div">;
export const SkillsCard: FC<SkillsCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={cn(
      "p-7 block-section flow-root shadow bg-white",
      className,
    )}>
      <div className="">
        <h2 className="text-lg font-bold mb-2.5">{t("Skills")}</h2>
        <div className="-mx-1 flex flex-wrap">
          <SkillTag className="m-1">TypeScript</SkillTag>
          <SkillTag className="m-1">React</SkillTag>
          <SkillTag className="m-1">HTML/CSS</SkillTag>
          <SkillTag className="m-1">Vue 2</SkillTag>
          <SkillTag className="m-1">SQL</SkillTag>
          <SkillTag className="m-1">.NET Core / C#</SkillTag>
          <SkillTag className="m-1">Java</SkillTag>
          <SkillTag className="m-1">Scala (Typelevel / ZIO)</SkillTag>
          <SkillTag className="m-1">Linux</SkillTag>
          <SkillTag className="m-1">Docker</SkillTag>
          <SkillTag className="m-1">Kubernetes</SkillTag>
          <SkillTag className="m-1">RabbitMQ</SkillTag>
          <SkillTag className="m-1">Elasticsearch</SkillTag>
          <SkillTag className="m-1">Prometheus / Grafana</SkillTag>
        </div>
      </div>
    </div>
  );
};
