import Link from 'next/link'
import React from 'react'

import { CalendarIcon, TimerIcon } from '@radix-ui/react-icons'

import { format } from 'date-fns'
import Image from './NextImage'

export default function BlogCard({ post, link }) {
  return (
    <>
      <Link href={link}>
        <article className="h-full overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
          <Image
            alt="Office"
            src={post.structuredData.image}
            className="h-56 w-full object-cover"
            width={2070}
            height={1380}
          />

          <div className="h-full bg-white p-4 dark:bg-gray-800 sm:p-6">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <div className="my-1 flex gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="  flex items-center gap-1">
                <CalendarIcon /> {format(new Date(post.date), 'MMMM dd, yyyy')}
              </div>
              <div className="  flex items-center gap-1">
                <TimerIcon /> {post.readingTime.text}
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              {post.desc}
            </p>
          </div>
        </article>
      </Link>
    </>
  )
}
