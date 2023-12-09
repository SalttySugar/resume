import React, { FC, PropsWithChildren, useEffect } from "react";
import { Sidebar } from "@/components/profile/widgets";
import { PageLoaderModel } from "@/components/page-loader";

const delay = (duration: number) => new Promise((res) => setTimeout(res, duration))


const waitForImage = async (img: HTMLImageElement) => {
  const src = img.getAttribute("src");
  const promise = new Promise((res) => img.addEventListener("load", res))
  img.setAttribute("src", src!);

  return promise;
};


const waitForAllImages = async () => {
  const images = document.getElementsByTagName("img");
  return await Promise.allSettled(Array.from(images).map(waitForImage));
}


const onAppReady = async () => {
  const start = Date.now();
  await waitForAllImages();
  const end = Date.now();
  const duration = end - start;

  if (duration < 500) {
    await delay(500);
  }

  PageLoaderModel.hideLoader();
}

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    onAppReady();
  }, []);
  return (
    <div className="w-full max-w-[1210px] m-auto pb-12 md:py-16">
      <div className="grid gap-5 lg:grid-cols-3">
        <Sidebar />
        <main className="space-y-5 lg:col-span-2">
          {children}
        </main>
      </div>
    </div>
  )
}
