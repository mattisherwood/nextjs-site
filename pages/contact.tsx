import { Footer, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

const content = pages[3]

export default function Contact() {
  return (
    <>
      <Head title={content.title} />
      <Header currentPage={content.title} />
      <Main>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </Main>
      <Footer />
    </>
  )
}
