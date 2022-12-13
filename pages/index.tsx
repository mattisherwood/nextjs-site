import { Card, Footer, Grid, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

const content = pages[0]

export default function Page() {
  return (
    <>
      <Head title='Home' />
      <Header currentPage='Home' />
      <Main content={content}>
        <Grid>
          {pages.map(({ id, shortTitle, description, url }) => (
            <Card
              title={shortTitle}
              description={description}
              url={url}
              key={id}
            />
          ))}
        </Grid>
      </Main>
      <Footer />
    </>
  )
}
