import { allBlogs } from 'contentlayer/generated'
import { ListLayout } from '@/layouts/list-layout'
import { allCoreContent } from '@/lib/contentlayer'
import { sortPosts } from '@/lib/mdx'
import { POSTS_PER_PAGE } from '@/config/post'



export default function BlogPage() {
  let posts = allCoreContent(sortPosts(allBlogs))
  let pageNumber = 1
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
