import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import { locales } from './config/site'

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  let headers = { 'accept-language': 'en-US,en;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
  let defaultLocale = 'en-US'

  const locale = match(languages, locales, defaultLocale) // -> 'en-US'
  const langCode = locale.split('-')[0];
  return langCode
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const referer = request.headers.get('Next-url')

  console.log(`pathname: ${pathname}`)
  console.log(`referer: ${referer}`)

/*   if (referer) {
    const refererIsMissingLocale = locales.every(
      (locale) => !referer.startsWith(`/${locale}/`) && referer !== `/${locale}`
    )

    if (!refererIsMissingLocale) {
      const match = referer.match(/^\/(\w+)/);
      if (match) {
        return NextResponse.redirect(
          new URL(`/${match[1]}/${pathname}`, request.url)
        )
      }
    }
  } */

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|public|images|api|site.webmanifest).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}