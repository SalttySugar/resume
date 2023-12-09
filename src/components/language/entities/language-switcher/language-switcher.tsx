import EnglishFlag from "@/assets/media/eng-flag.png"
import UaFlag from "@/assets/media/ua-flag.png"
import React, { FC, useMemo, } from "react"
import { Menu } from "@headlessui/react"
import { cn } from "@/shared/libs/utils";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();
  const languages = useMemo(() => [
    {
      code: "en",
      name: t("English"),
      flag: EnglishFlag,
      current: i18n.language === "en"
    },

    {
      code: "ua",
      name: t("Ukrainian"),
      flag: UaFlag,
      current: i18n.language === "ua"
    },

  ], [i18n.language, t])

  console.log(i18n.language);

  const currentLanguage = useMemo(
    () => languages.find(lang => lang.current) ?? {
      code: "en",
      name: t("English"),
      flag: EnglishFlag,
      current: i18n.language === "en-US" || i18n.language === "en"
    },
    [languages]
  );

  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
    >
      <Menu.Button

        className={cn(
          "flex",
          "rounded-sm",
          "bg-white hover:bg-gray-50",
          "px-3.5 py-1.5",
          "space-x-3 items-center",
          "font-bold text-sm"
        )}>

        <div
          className="bg-center bg-cover w-[30px] h-[30px] rounded-full bg-white"
          style={{ backgroundImage: `url(${currentLanguage?.flag})` }}
        />

        <p>{currentLanguage?.name}</p>
      </Menu.Button>

      <Menu.Items
        className={cn(
          "absolute",
          "right-0",
          "mt-2 min-w-full",
          "origin-top-right",
          "divide-y",
          "divide-gray-100",
          "rounded-md",
          "bg-white",
          "shadow-lg ring-1",
          "ring-black",
          "ring-opacity-5",
          "focus:outline-none"
        )}
        as="nav"
      >
        <ul>
          {languages.map((lang) => (
            <Menu.Item
              key={lang.code}
              as="li"
              onClick={() => i18n.changeLanguage(lang.code)}
              className={cn(
                "cursor-pointer",
                "hover:bg-gray-200",
                "px-3 py-3",
                "flex items-center space-x-3",
                "font-bold text-sm",
                lang.current && "bg-gray-100"
              )}
            >
              <div
                className="bg-center bg-cover w-[30px] h-[30px] rounded-full"
                style={{ backgroundImage: `url(${lang.flag})` }}
              />
              <p>{lang.name}</p>
            </Menu.Item>
          ))}
        </ul>
      </Menu.Items>
    </Menu>
  );
}
