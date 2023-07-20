const cn = {
  LANG: "cn",
  Blog: {
    Title: "博客",
    TitleDescription: "生活琐事",
  },
  Settings: {
    LightMode: "亮色模式",
    DarkMode: "暗色模式",
    System: "随系统变化",
  },
  Navigation: {
    Blog: "博客",
    Hint: "短文",
    About: "关于我",
    Project: "项目",
  },
  Site: {
    Name: "Kud的博客",
    Description: "所书即生活",
    url: "",
    links: {
      twitter: "https://twitter.com/KUD_LAIN",
      github: "https://github.com/KUD-00/blog",
    },
  },

};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export type LocaleType = DeepPartial<typeof cn>;
export type RequiredLocaleType = typeof cn;

export default cn;
