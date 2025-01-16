'use client'

import { Logo } from '@/components/header/logo'

import { Link } from '@/components/ui/link'
import { SITE_METADATA } from '@/config/site-metadata'
import { fetcher } from '@/lib/utils'
import { HighlightUnderline } from '../ui/highlight-underline'


export default function LogoAndRepo() {
  let siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '')

  return (
    <div className="flex items-center">
      <Logo className="mr-4" />
      <Link href={SITE_METADATA.siteRepo} rel="noreferrer">
        <HighlightUnderline
          data-umami-event="footer-view-source"
          className="flex items-center gap-2 font-bold"
        >
          {SITE_METADATA.headerTitle}
        </HighlightUnderline>
      </Link>
      
    </div>
  )
}

