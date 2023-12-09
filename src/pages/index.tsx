import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { DefaultLayout } from "@/components/layouts";
import { AboutMeSection } from "@/components/profile/features";
import { EducationSection } from "@/components/education/widgets";



const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <div className="px-4 sm:px-0 space-y-5">
        <AboutMeSection />
        <EducationSection />
      </div>
    </DefaultLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Home Page</title>
  <body className="bg-gray-100" />
</>
