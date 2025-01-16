import { clsx } from 'clsx'
import { AreaChart, Rss } from 'lucide-react'
import { Link } from '@/components/ui/link'
import { SITE_METADATA } from '@/config/site-metadata'
import MadeInVietNam from '@/icons/miv.svg'

export default function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © Fatih Ulil Albab 2025
          </span>
    </div>
  )
}
