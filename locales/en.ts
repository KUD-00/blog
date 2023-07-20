import { Darker_Grotesque } from "next/font/google";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  LANG: "en",
  Blog: {
    Title: "Blog",
    TitleDescription: "full of blabla",
  },
  Settings: {
    LightMode: "Light Mode",
    DarkMode: "Dark Mode",
    System: "System",
  },
  Navigation: {
    Blog: "Blog",
    Hint: "Hint",
    About: "About Me",
    Project: "Project",
  },
  Site: {
    Name: "Kud's Blog",
    Description: "I write my life",
    url: "",
    links: {
      twitter: "https://twitter.com/KUD_LAIN",
      github: "https://github.com/KUD-00/blog",
    },
  },

};

export default en;
