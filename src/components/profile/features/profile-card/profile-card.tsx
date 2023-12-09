import React, { FC } from "react";
import { cn } from "@/shared/libs/utils";
import { DownloadCvButton } from "../../entities";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/language/entities";
import BgCover from "@/assets/media/profile-background.jpg"
import Profile from "@/assets/media/profile-old.png"
import CV_PDF from "@/assets/docs/cv-eng.pdf";


export const ProfileCard: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="shadow bg-white">
      <div
        className="h-48 w-full bg-cover"
        style={{ backgroundImage: `url(${BgCover})` }}
      />
      <div className="px-7 pb-7 bg-white relative">
        <div className="flex group justify-between items-end origin-center relative transform -translate-y-1/2">
          <img
            className={cn(
              "w-[80px]",
              "rounded-lg",
              "border-2 border-white",
            )}
            src={Profile}
            alt="Avatar"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-lg font-semibold mb-1.5">{t("Stasiv Bogdan")}</div>
            <div className="text-sm text-gray-400 mb-7">{t("Software Developer")}</div>
          </div>
          <div className="flex flex-col space-y-2 print:hidden">
            <span className="text-xs font-bold">
              {t("Language")}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
        <DownloadCvButton
          onClick={() => window.open(CV_PDF)}
          classes={{
            container: "w-full print:opacity-0",
          }}
          children={t("Download CV")}
        />
      </div>
    </div>
  );
}
