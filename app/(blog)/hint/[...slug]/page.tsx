import { notFound } from "next/navigation"
import { allHints } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { env } from "@/env.mjs"
import { absoluteUrl, cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getHintFromParams(params) {
  const slug = params?.slug?.join("/")
  const hint = allHints.find((hint) => hint.slugAsParams === slug)

  if (!hint) {
    null
  }

  return hint
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const hint = await getHintFromParams(params)

  if (!hint) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", hint.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: hint.title,
    openGraph: {
      title: hint.title,
      type: "article",
      url: absoluteUrl(hint.slug),
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allHints.map((hint) => ({
    slug: hint.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const hint = await getHintFromParams(params)

  if (!hint) {
    notFound()
  }


  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {hint.date && (
          <time
            dateTime={hint.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(hint.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {hint.title}
        </h1>
      </div>
      <Mdx code={hint.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}
