import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Hint",
}

export default async function Project() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Project
          </h1>
          <p className="text-xl text-muted-foreground">
            在做什么呢(顺便试一试daisyui)
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">阅读programming in rust</div>
                <div className="stat-value">46/501</div>
                <div className="stat-desc">开始生锈！</div>
                <progress className="progress w-56" value={10} max="100"></progress>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p>2023/6/21:再开！这书第二章感觉不是很好啃啊，要不就是我太菜了</p>
          </div>
        </div>
      </div>
    </div>
  )
}
