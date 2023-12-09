import React, { FC } from "react";
import { Heading, Section } from "@/shared/ui";
import { EducationEntry } from "@/components/education/features";
import { useTranslation } from "react-i18next";
import TNULogo from "@/assets/media/TNU.png";
import NAULogo from "@/assets/media/NAU.png";

export type EducationSectionProps = {};
export const EducationSection: FC<EducationSectionProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Section {...props}>
      <Heading
        as="h2"
        variant="h4"
        className="mb-5"
        children={t("Education")}
      />
      <div className="w-full space-y-6">
        <EducationEntry
          image={TNULogo}
          name={t("Taurida National University")}
          shortname={t("TNU")}
          level={t("Master in Software Engineering")}
          location={t("Ukraine, Kiev")}
          date={t("October 2023 – December 2024")}
        />


        <div className="flex space-x-4">
          <div className="w-12" />
          <div className="border-b border-gray-200 w-full"></div>
        </div>

        <EducationEntry
          image={NAULogo}
          name={t("Colledge of Engineering and Management")}
          shortname={t("COEM NAU")}
          level={t("Bachelor in Computer Engineering")}
          location={t("Ukraine, Kiev")}
          date={t("September 2019 – June 2021")}
        />

        <div className="flex space-x-4">
          <div className="w-12" />
          <div className="border-b border-gray-200 w-full"></div>
        </div>

        <EducationEntry
          image={NAULogo}
          name={t("Colledge of Engineering and Management")}
          shortname={t("COEM NAU")}
          level={t("Junior in Software Development")}
          location={t("Ukraine, Kiev")}
          date={t("September 2015 – June 2019")}
        />
      </div>
    </Section>
  )

}
