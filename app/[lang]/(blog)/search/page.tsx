"use client"

import { ElementRef, useCallback, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils"
import { Post } from "contentlayer/generated";
import debounce from 'lodash.debounce'; 


const posts = allPosts.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date))
})

export default async function Search() {
  const searchRef = useRef<ElementRef<"input">>(null)
  const [ searchedPosts, setSearchedPosts ] = useState<Post[] | null>(null)

  const handleBlur = (event) => {
    handleSearch()
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  const handleSearch = useCallback(debounce(() => {
    const query = searchRef.current?.value

    if (query) {
      setSearchedPosts(posts.filter((post) => {
        return post.title.includes(query)
      }))
    }
  }, 300), [])

  return (
    <>
    <div className="form-control">
      <div className="input-group">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search…"
          className="input-bordered input"
        />
        <button className="btn-square btn" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    {searchedPosts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {searchedPosts.map((post, index) => (
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
        <p>No post related to your search.</p>
      )}
    </>
  )
}
