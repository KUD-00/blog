const cn = {
  Blog: {
    Title: "博客",
    TitleDescriptionn: "生活琐事",
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
