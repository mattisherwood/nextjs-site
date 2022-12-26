import { ContentBlock, Footer, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

const { contentBlocks, metadata, shortTitle } = pages[0]

export default function Page() {
  return (
    <>
      <Head {...metadata} />
      <Header currentPage={shortTitle} />
      <Main contentBlocks={contentBlocks as ContentBlock[]} />
      <Footer />
    </>
  )
}
