import { Footer, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

const { contentBlocks, metadata, shortTitle } = pages[3]

export default function Page() {
  return (
    <>
      <Head {...metadata} />
      <Header currentPage={shortTitle} />
      <Main contentBlocks={contentBlocks} />
      <Footer />
    </>
  )
}
