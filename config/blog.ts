import { BlogConfig } from "types"
import { getDictionary } from "@/app/[lang]/i18n"
import { MainNavItem } from "types"

export const getBlogConfig = async (langCode) => {
  const dict = await getDictionary(langCode)
  return [
      {
        title: dict.blog,
        href: "/blog/page/0",
      },
      {
        title: dict.hint,
        href: "/hint",
      },
      {
        title: dict.about,
        href: "/blog/about",
      },
      {
        title: dict.project,
        href: "/project",
      },
    ]
}


export const blogConfig: BlogConfig = {
  allBlogsHref: "/blog/page/0",
  mainNav: [
    {
      title: "Blog",
      href: "/blog/page/0",
    },
    {
      title: "Hint",
      href: "/hint",
    },
    {
      title: "About",
      href: "/blog/about",
    },
    {
      title: "Project",
      href: "/project",
    },
  ],
}
