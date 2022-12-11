import { Card, Footer, Grid, Head, Header, Main } from "../components"
import { pages, people } from "../fixtures"

const content = pages[2]

export default function About() {
  return (
    <>
      <Head title={content.title} />
      <Header currentPage={content.title} />
      <Main>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <Grid columns={2}>
          {people.map(({ firstName, lastName, bio, image }) => (
            <Card
              title={`${firstName} ${lastName}`}
              description={bio}
              image={{
                src: image,
                alt: `${firstName} ${lastName}`,
                width: 75,
                height: 75,
              }}
            />
          ))}
        </Grid>
      </Main>
      <Footer />
    </>
  )
}
