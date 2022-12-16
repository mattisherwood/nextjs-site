import { Card, Container, Grid } from ".."

type Props = {
  type: "people"
  people: {
    id: number
    firstName: string
    lastName: string
    image: string
    bio: string
  }[]
}

export const PeopleBlock = ({ people }: Props) => (
  <section>
    <Container>
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
    </Container>
  </section>
)
