import Image from "next/image"
import { Mdx } from "@/components/mdx-components"
import Link from "next/link"
import { allHints } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Hint",
}

export default async function Hint() {
  const hints = allHints
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Hint
          </h1>
          <p className="text-xl text-muted-foreground">
              随想，无条理的倾诉
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {hints?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {hints.map((hint, index) => (
            <article
              key={hint._id}
              className="group relative flex flex-col space-y-2"
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
  )
}
