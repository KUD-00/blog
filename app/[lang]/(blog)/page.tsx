import Link from "next/link"

import { Mdx } from "@/components/mdx-components"
import { env } from "@/env.mjs"
import Image from 'next/image';
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { allPosts } from "contentlayer/generated"
import { Icons } from "@/components/icons"
import { allHints } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { formatDate } from "@/lib/utils"
import { BlogConfig } from "@/types";
import { blogConfig } from "@/config/blog";
import { getDictionary } from '@/app/[lang]/i18n'

export default async function IndexPage({ params: { lang } }) {
  const dict = await getDictionary(lang)
  const posts = allPosts
        .sort((a, b) => {
          return compareDesc(new Date(a.date), new Date(b.date))
        })
        .slice(0, 5)

  const hints = allHints
        .sort((a, b) => {
          return compareDesc(new Date(a.date), new Date(b.date))
        })
        .slice(0, 5)

  return (
    <div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="container max-w-[64rem] flex-row gap-4 text-center md:flex">
          <div className="flex-initial flex-col md:w-2/3">
            <h2 className="mb-10 inline-block font-heading text-3xl leading-tight lg:text-4xl">
              {dict.blog}
            </h2>
            {posts?.length ? (
              <div className="grid gap-10 sm:grid-cols-1">
                {posts.map((post, index) => (
                  <article
                    key={post._id}
                    className="group relative flex flex-col space-y-2 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={804}
                        height={452}
                        className="rounded-md border bg-muted transition-colors"
                        priority={index <= 1}
                      />
                    )}
                    <h2 className="text-2xl font-extrabold">{post.title}</h2>
                    {post.description && (
                      <p className="text-muted-foreground">{post.description}</p>
                    )}
                    {post.date && (
                      <p className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </p>
                    )}
                    <Link href={post.slug} className="absolute inset-0">
                      <span className="sr-only">View Article</span>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <p>No post published.</p>
            )}
            <Link
              href={blogConfig.allBlogsHref}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "top-14 mt-10 inline-flex"
              )}
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              {dict.seeAllPosts}
            </Link>
          </div>
          <div className="mt-16 flex-initial flex-col items-center md:ml-16 md:mt-0 md:w-1/3">
            <h2 className="mb-10 inline-block font-heading text-3xl leading-tight lg:text-4xl">
              {dict.hint}
            </h2>
            {hints?.length ? (
              <div className="grid gap-10 sm:grid-cols-1">
                {hints.map((hint, index) => (
                  <article
                    key={hint._id}
                    className="group relative flex flex-col space-y-2 rounded-md"
                  >
                    <h2 className="text-2xl font-extrabold">{hint.title}</h2>
                    {hint.date && (
                      <p className="text-sm text-muted-foreground">
                        {formatDate(hint.date)}
                      </p>
                    )}
                    <Mdx code={hint.body.code}/>
                  </article>
                ))}
              </div>
            ) : (
              <p>No hints published.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
