import { Footer, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

const content = pages[3]

export default function Page() {
  return (
    <>
      <Head title={content.title} />
      <Header currentPage={content.shortTitle} />
      <Main content={content}>
        <form>
          <p>Form goes here</p>
        </form>
      </Main>
      <Footer />
    </>
  )
}
