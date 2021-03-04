import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorTextForDark = rgba("white", 0.96);

export default {
  ...themeDefault,
  borderRadius: "0.75rem",
  colorBackground: "#f0f0f9",
  colorNavbar: "#100f10",
  colorText: "#343239",
  colorLabel: "#A4A3A6",
  colorBorder: "#f0f0f9",
  colorPrimary: "#6A26CD",
  colorPrimaryText: colorTextForDark,
  colorAccent: "#37B9F1",
  colorAccentText: colorTextForDark,
  colorCardBackground: "#ffffff",
  colorDefaultBackground: "#e3e3e8",
  colorDefaultText: "#73707C",
  colorDisabledBackground: "#d5d5e3",
  colorDisabledText: "#bebed0",
  colorCode: "#100f10",
  lenSm1: "0.25rem",
  lenSm2: "0.5rem",
  lenSm3: "0.75rem",
  lenMd1: "1rem",
  lenMd2: "1.25rem",
  lenMd3: "1.5rem",
  lenLg1: "2rem",
  lenLg2: "3rem",
  lenLg3: "4rem",
  lenXl1: "5rem",
  lenXl2: "6rem",
  lenXl3: "7rem",
};
