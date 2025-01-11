import type { MDXDocumentDate } from "@/types/data"

export function sortPosts<T extends MDXDocumentDate>(allBlogs: T[], dateKey: string = 'date'): T[] {
  return allBlogs.sort((a, b) => dateSortDesc(a[dateKey], b[dateKey]))
}

function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
