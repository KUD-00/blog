import { Darker_Grotesque } from "next/font/google";
import { RequiredLocaleType } from "./index";

const jp: RequiredLocaleType = {
  LANG: "jp",
  Blog: {
    Title: "ブログ",
    TitleDescription: "日常",
  },
  Settings: {
    LightMode: "ライトモード",
    DarkMode: "ダークモード",
    System: "システム",
  },
  Navigation: {
    Blog: "ブログ",
    Hint: "短文",
    About: "私ついて",
    Project: "プロジェクト",
  },
  Site: {
    Name: "Kudのブログ",
    Description: "生活記事",
    url: "",
    links: {
      twitter: "https://twitter.com/KUD_LAIN",
      github: "https://github.com/KUD-00/blog",
    },
  },

};

export default jp;