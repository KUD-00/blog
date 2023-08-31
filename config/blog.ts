import { BlogConfig } from "types"
import Locale from "@/locales"

export const blogConfig: BlogConfig = {
  allBlogsHref: "/blog/page/0",
  mainNav: [
    {
      title: Locale.Navigation.Blog,
      href: "/blog/page/0",
    },
    {
      title: Locale.Navigation.Hint,
      href: "/hint",
    },
    {
      title: Locale.Navigation.About,
      href: "/blog/about",
    },
    {
      title: Locale.Navigation.Project,
      href: "/project",
    },
  ],
}
