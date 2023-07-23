'use client'

import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import * as React from "react"
import { formatDate } from "@/lib/utils"
import Locale from "@/locales"

const PostList = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  const [page, setPage] = React.useState<number>(0)
  const blogCount = 10
  const computedPage = Math.ceil(posts.length / blogCount)
  const postSlice = posts.slice(page * blogCount, page * blogCount + blogCount)

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            {Locale.Blog.Title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {Locale.Blog.TitleDescription}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {postSlice.map((post, index) => (
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
        <p>No posts published.</p>
      )}
      <div className="mt-10 grid justify-center">
        <div className="join">
          {Array.from({ length: computedPage }, (_, index) => {
            const handleClick = () => {
              setPage(index);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            if (page === index) {
              return (
                <input
                  onClick={handleClick}
                  className="btn-square join-item btn"
                  type="radio"
                  name="options"
                  aria-label={index.toString()}
                  checked
                />
              );
            } else {
              return (
                <input
                  onClick={handleClick}
                  className="btn-square join-item btn"
                  type="radio"
                  name="options"
                  aria-label={index.toString()}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default PostList
