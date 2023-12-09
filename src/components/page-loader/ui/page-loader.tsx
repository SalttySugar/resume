import React, { FC } from "react";
import { PageLoaderModel } from "../model";
import { Transition } from "@headlessui/react"


export const PageLoader: FC = () => {
  const isLoading = PageLoaderModel.useState();

  return (
    <Transition
      show={isLoading}
      as="div"
      role={"status"}
      className="z-50 bg-white inset-0 flex items-center justify-center fixed"
      leave="duration-300 transition-opacity"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex justify-center">
        <span className="circle animate-loader"></span>
        <span className="circle animate-loader animation-delay-200"></span>
        <span className="circle animate-loader animation-delay-400"></span>
      </div>
    </Transition>
  )
};
