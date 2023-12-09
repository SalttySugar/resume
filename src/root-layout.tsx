import "@/shared/libs/i18n";
import React, { FC, PropsWithChildren } from "react"
import { PageLoader } from "@/components/page-loader";



export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>
    <PageLoader />
    {children}
  </>
}

