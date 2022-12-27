import { Container, Footer, Header, Link } from "../components"
import { pages } from "../fixtures"
import { PageType } from "../types"

const NotFound = () => {
  return (
    <>
      <Header pages={pages as PageType[]} />
      <main>
        <Container>
          <section>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>
              Go back to the <Link href='/'>homepage</Link>
            </p>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
