import Link from "next/link"

import { getBlogConfig, blogConfig } from "@/config/blog"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default async function MarketingLayout({
  children, params
}: MarketingLayoutProps) {
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-around py-6">
          <MainNav items={await getBlogConfig(params.lang)} langCode={params.lang} />
        </div>
      </header>
      <main className="flex-1" lang={params.lang}>{children}</main>
      <SiteFooter />
    </div>
  )
}
