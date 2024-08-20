import React from "react";
import { Slot } from "expo-router";
import { ThemeProvider } from "styled-components";
import { theme } from "../global/styles/theme";

export default function Home() {
  return(
    <ThemeProvider theme={theme}>
      <Slot></Slot>
    </ThemeProvider>
  )
}