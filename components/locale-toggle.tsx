'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import { changeLang } from "@/locales"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function LocaleToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.languages className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLang("cn")}>
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>简体中文</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLang("en")}>
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
