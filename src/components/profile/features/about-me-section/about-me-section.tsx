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
            {t("I am a 24-year-old software engineer with a deep passion for programming and a strong affinity for functional and modern programming languages. My journey in the software development world has been an exciting one, and I am constantly motivated by the opportunities to learn and grow 🚀.")}
          </p>

          <p>
            {t("My technical expertise spans a variety of languages, including Haskell, C#, Kotlin, and Scala. Haskell holds a special place in my heart ❤️, and I'm continually fascinated by its elegance and expressiveness. I'm also an enthusiastic learner 📚, currently expanding my horizons by diving into the world of Rust, drawn by its emphasis on safety and performance ⚙️.")}
          </p>

          <p className={cn(!isExcerptVisible && "hidden")}>
            {t("Beyond my professional interests, I lead a balanced life that incorporates creativity and continuous learning 🎸🎹. In my spare time, you can find me strumming my guitar or playing the piano 🎵, as music provides a creative outlet and a source of relaxation. Additionally, I enjoy exploring diverse subjects that extend beyond the realm of software engineering 🌍. This broader perspective not only enriches my problem-solving abilities but also fuels my curiosity 🤓.")}
          </p>

          <p className={cn(!isExcerptVisible && "hidden")}>
            {t("I am on the lookout for opportunities to work and collaborate with like-minded individuals who share my passion for programming and common interests. I am committed to personal and professional growth and am excited about the possibility of contributing my skills and enthusiasm to a team that values innovation, teamwork, and the pursuit of excellence 💪.")}
          </p>

          <p className={cn(!isExcerptVisible && "hidden")}>
            {t("If you share my enthusiasm for technology and a well-rounded approach to life, I look forward to the opportunity to discuss how I can contribute to your team and goals 🤝.")}
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
