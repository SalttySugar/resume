import React, { FC } from "react";
import { Heading, Section, SectionProps } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { useToggle } from "react-use";
import { cn } from "@/shared/libs/utils";

export type AboutMeSectionProps = SectionProps
export const AboutMeSection: FC<AboutMeSectionProps> = (props) => {
  const { t } = useTranslation();
  const [isExcerptVisible, toggleExcerpt] = useToggle(false);
  const isExcerptHidden = !isExcerptVisible;

  return (
    <Section {...props}>
      <Heading
        as="h2"
        variant="h3"
        className="mb-3.5"
        children={t("About me")}
      />
      <div>
        <div className="text-gray-600 mb-5 space-y-3 flex flex-col relative">
          <p>
            {t("Hello, I'm a 24-year-old software engineer driven by a genuine love for coding and a preference for contemporary programming languages. My journey in the software development field has been dynamic, fueled by a constant desire to learn and evolve.")}
          </p>

          <p>
            {t("My proficiency extends across various languages like Haskell, C#, Kotlin, and Scala. Haskell, in particular, captivates me with its elegance and expressiveness, holding a special place in my affections. Currently, I'm eagerly delving into Rust, attracted by its emphasis on safety and performance.")}
          </p>

          <p className={cn(!isExcerptVisible && "hidden")}>
            {t("Outside the professional realm, I maintain a well-rounded life that includes creativity and ongoing education. During my free time, you'll find me playing the guitar or piano, using music as both a creative outlet and a means of relaxation. Additionally, I explore diverse subjects beyond software engineering, providing a broader perspective that enhances my problem-solving skills and fuels my curiosity.")}
          </p>

          <p className={cn(!isExcerptVisible && "hidden")}>
            {t("I'm actively seeking opportunities to collaborate with individuals who share my passion for programming and common interests. Committed to personal and professional development, I'm eager to contribute my skills and enthusiasm to a team that values innovation, teamwork, and excellence.")}
          </p>

          <p className={cn(!isExcerptVisible && "hidden")}>
            {t("If you resonate with my tech enthusiasm and holistic approach to life, I look forward to discussing how I can contribute to your team and objectives.")}
          </p>

          <div className={cn(
            "print:hidden",
            isExcerptVisible && "hidden",
            "w-full h-full from-transparent to-white bg-gradient-to-b absolute bottom-0",
          )} />

        </div>
        <button
          onClick={toggleExcerpt}
          className="font-bold text-md text-indigo-500 hover:text-indigo-500 print:hidden"
          children={isExcerptHidden ? t("Read more") : t("Hide text")}
        />
      </div>
    </Section>
  )
}
