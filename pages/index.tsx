import type { GetStaticProps } from "next"
import { Footer, Head, Header, Main } from "../components"
import { pages } from "../fixtures"
import { ContentBlock, PageType } from "../types"
import { getPageData } from "../utils"

type Props = {
  page: PageType
}

const Page = ({ page }: Props) => {
  const { contentBlocks, metadata, slug } = page
  return (
    <>
      <Head {...metadata} />
      <Header pages={pages as PageType[]} currentPage={slug} />
      <Main contentBlocks={contentBlocks as ContentBlock[]} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const slug = "home"
  const page = getPageData(slug!)
  return {
    props: {
      page,
    },
  }
}

export default Page
