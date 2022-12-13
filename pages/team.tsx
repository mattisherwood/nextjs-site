import { Card, Footer, Grid, Head, Header, Main } from "../components"
import { pages, people } from "../fixtures"

const content = pages[2]

export default function Page() {
  return (
    <>
      <Head title={content.title} />
      <Header currentPage={content.shortTitle} />
      <Main content={content}>
        <Grid columns={2}>
          {people.map(({ id, firstName, lastName, bio, image }) => (
            <Card
              title={`${firstName} ${lastName}`}
              description={bio}
              image={{
                src: image,
                alt: `${firstName} ${lastName}`,
                width: 75,
                height: 75,
              }}
              key={id}
            />
          ))}
        </Grid>
      </Main>
      <Footer />
    </>
  )
}
