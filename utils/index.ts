import { pages } from "../fixtures"

export const getPageData = (slug: string) => {
  return pages.filter((page) => page.slug == slug)[0]
}
