import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils"
import { getDictionary } from "@/app/[lang]/i18n";

interface PostListPageProps {
  params: {
    slug: string
    lang: string
  }
}

const posts = allPosts.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date))
})

const blogCount = 10

const computedPage = Math.ceil(posts.length / blogCount)

export async function generateStaticParams() {
  const pages = Array.from({length: computedPage}, (_, i) => i)
  return pages.map(page => ({
    page: page.toString(),
  }))
}

export default async function PostListPage({ params } : PostListPageProps) {
  const postSlice = posts.slice(Number(params.slug) * blogCount, Number(params.slug) * blogCount + blogCount)
  const previousPageId = Number(params.slug) != 0 ? Number(params.slug) - 1 : 0
  const nextPageId = Number(params.slug) != computedPage ? Number(params.slug) + 1 : computedPage
  const dict = await getDictionary(params.lang)

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

    return (
    // 获取 page 参数并渲染
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            {dict.blog}
          </h1>
          <p className="text-xl text-muted-foreground">
            {dict.blogDescription}
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
       <div className="join mt-10 flex justify-center">
       <Link href={`${previousPageId}`}>
            <button className="btn-outline join-item btn">«</button>
       </Link>
       <button className="btn-outline join-item btn">{`Page ${params.slug}`}</button>
       <Link href={`${nextPageId}`}>
            <button className="btn-outline join-item btn">»</button>
       </Link>
        </div>
      </div>
    )
}