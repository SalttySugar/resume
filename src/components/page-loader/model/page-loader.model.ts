import { create } from "zustand"

export module PageLoaderModel {
  export const useState = create<boolean>()(() => true)

  export const hideLoader = () => useState.setState(false);
}
