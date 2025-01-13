
import { allBlogs, allSnippets } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_METADATA } from '@/config/site-metadata'
import tagData from '@/data/tag-data.json'

import { allCoreContent } from '@/lib/contentlayer'
import { sortPosts } from '@/lib/mdx'
import { ListLayoutWithTags } from '@/layouts/list-layout-with-tags'

export let generateStaticParams = async () => {
  let tagCounts = tagData as Record<string, number>
  let tagKeys = Object.keys(tagCounts)
  let paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  let params = await props.params
  let tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  let title = '#' + tag[0] + tag.split(' ').join('-').slice(1)
  let filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  let filteredSnippets = allCoreContent(
    sortPosts(
      allSnippets.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag))
    )
  )
  if (filteredPosts.length === 0 && filteredSnippets.length === 0) {
    return notFound()
  }
  return (
    <ListLayoutWithTags
      title={title}
      description={
        <>
          Things I've written about <span className="ml-2 font-medium">#{tag}</span>
        </>
      }
      posts={filteredPosts}
      snippets={filteredSnippets}
    />
  )
}
