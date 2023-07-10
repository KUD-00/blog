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
                <div className="stat-value">80/501</div>
                <div className="stat-desc">开始生锈！</div>
                <progress className="progress w-56" value={16} max="100"></progress>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p>2023/6/21:再开！这书第二章感觉不是很好啃啊，要不就是我太菜了</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">阅读learning git</div>
                <div className="stat-value">9/12</div>
                <div className="stat-desc">多了解一点</div>
                <progress className="progress w-56" value={31} max="100"></progress>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p>2023/6/24:好歹也掌握一下branch和rebase</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">阅读practical linux system</div>
                <div className="stat-value">15/15</div>
                <div className="stat-desc">多了解一点linux</div>
                <progress className="progress w-56" value={100} max="100"></progress>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p>2023/6/25:还是有些新东西的</p>
            <p>2023/7/01:although i begin to use nixos, this book still gives me some inspiration</p>
            <p>2023/7/06:finally, done</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">阅读docker: up and running</div>
                <div className="stat-value">4/14</div>
                <div className="stat-desc">nix alternative</div>
                <progress className="progress w-56" value={10} max="100"></progress>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p>2023/7/02:need to know more. to find jobs i think</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">阅读amazon web services</div>
                <div className="stat-value">3/18</div>
                <div className="stat-desc">boss of cloud</div>
                <progress className="progress w-56" value={10} max="100"></progress>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p>2023/7/06: to find jobs, to build things using S3 object store</p>
          </div>
        </div>
      </div>
    </div>
  )
}
