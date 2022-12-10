import { Card, Footer, Grid, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

export default function Home() {
  return (
    <>
      <Head title='Home' />
      <Header currentPage='Home' />
      <Main>
        <h1>Welcome to this NextJS Website</h1>
        <h2>Using React/Typescript</h2>
        <Grid>
          {pages.map(({ title, description, url }) => (
            <Card title={title} description={description} url={url} />
          ))}
        </Grid>
      </Main>
      <Footer />
    </>
  )
}
