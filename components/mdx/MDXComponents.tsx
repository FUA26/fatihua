import TOCInline from 'pliny/ui/TOCInline.js'
import Pre from 'pliny/ui/Pre.js'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm.js'
import type { MDXComponents } from 'mdx/types'
import CustomLink from '../common/Link'
import TableWrapper from '../common/TableWrapper'
import Image from '../common/Image'



export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
