import { Footer, Head, Header, Main } from "../components"

const title = "Contact"

export default function Contact() {
  return (
    <>
      <Head title={title} />
      <Header currentPage={title} />
      <Main>
        <h1>This is the {title} Page!</h1>
      </Main>
      <Footer />
    </>
  )
}
