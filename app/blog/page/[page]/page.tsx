import { allBlogs } from 'contentlayer/generated'
import { ListLayout } from '@/layouts/list-layout'

import { allCoreContent } from '@/lib/contentlayer'
import { sortPosts } from '@/lib/mdx'
import { POSTS_PER_PAGE } from '@/config/post'

export let generateStaticParams = async () => {
  let totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  let paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  let params = await props.params
  let posts = allCoreContent(sortPosts(allBlogs))
  let pageNumber = parseInt(params.page as string)
  let initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  let pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All posts"
    />
  )
}
