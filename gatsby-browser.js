import React from "react";
import "./src/styles/global.css"
import { RootLayout } from "./src/root-layout"

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
