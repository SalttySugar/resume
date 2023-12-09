import { Heading } from "@/shared/ui";
import React, { ComponentProps, FC } from "react";
import { cn } from "@/shared/libs/utils";
import { useTranslation } from "react-i18next";

export type ProfileInfoProps = ComponentProps<"div">;
export const ProfileInfo: FC<ProfileInfoProps> = (props) => {
  const { className, ...rest } = props
  const { t } = useTranslation();

  return (
    <div
      {...rest}
      className={cn("p-7 bg-white rounded-lg shadow", className)} >
      <Heading as="h2" variant="h4" className="mb-3.5">{t("Information")}</Heading>
      <ul className="space-y-4">
        <li className="flex justify-between">
          <span className="text-gray-400">{t("Email")}</span>
          <a
            className="font-medium text-right text-indigo-700 hover:underline hover:text-indigo-600"
            href="mailto:pilipchukbogdan90@gmail.com"
          >
            pilipchukbogdan90@gmail.com
          </a>
        </li>

        <li className="flex justify-between">
          <span className="text-gray-400">{t("Phone number")}</span>
          <a
            className="font-medium text-right text-indigo-700 hover:underline hover:text-indigo-600"
            href="tel:+380660507475"
          >
            +380660507475
          </a>
        </li>

        <li className="flex justify-between">
          <span className="text-gray-400">{t("Telegram")}</span>
          <a
            className="font-medium text-right text-indigo-700 hover:underline hover:text-indigo-600"
            href="https://t.me/SalttySugar"
          >
            @SalttySugar
          </a>
        </li>

        <li className="flex justify-between">
          <span className="text-gray-400">{t("GitHub")}</span>
          <a
            className="font-medium text-right text-indigo-700 hover:underline hover:text-indigo-600"
            href="https://github.com/SalttySugar"
          >
            @SalttySugar
          </a>
        </li>

        <li className="flex justify-between">
          <span className="text-gray-400">{t("Age")}</span>
          <span className="font-medium text-right text-gray-600">24</span>
        </li>

        <li className="flex justify-between">
          <div className="text-gray-400">{t("Location")}</div>
          <div className="font-medium text-right text-gray-600">{t("Kiev")}</div>
        </li>

        <li className="flex justify-between">
          <div className="text-gray-400">{t("Relocation")}</div>
          <div className="font-medium text-right text-gray-600">{t("No")}</div>
        </li>

        <li className="flex justify-between">
          <span className="text-gray-400">{t("Power / Internet")}</span>
          <span className="font-medium text-right text-gray-600">{t("Available")}</span>
        </li>

      </ul>
    </div >
  );
};
