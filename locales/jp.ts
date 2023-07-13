import { Darker_Grotesque } from "next/font/google";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  Blog: {
    Title: "Blog",
    TitleDescription: "full of blabla",
  },
  Settings: {
    LightMode: "Light Mode",
    DarkMode: "Dark Mode",
    System: "System",
  },
  Site: {
    Name: "Kud's Blog",
    Description: "I write my life",
    url: "",
    links: {
      twitter: "https://twitter.com/KUD_LAIN",
      github: "https://github.com/KUD-00/blog",
    },
  }
};

export default en;