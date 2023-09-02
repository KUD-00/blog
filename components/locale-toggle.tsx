'use client'

import * as React from "react"
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { locales } from "@/config/site"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function LocaleToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  const changeLocale = (locale) => {
    if (pathnameIsMissingLocale) {
      router.push(`/${locale}${pathname}`)
    } else {
      const match = pathname.match(/^\/\w+(\/.+)/);
      if (match) {
        router.push(`/${locale}${match[1]}`)
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.languages className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.languages className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("zh")}>
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>简体中文</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("jp")}>
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>日本語</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
