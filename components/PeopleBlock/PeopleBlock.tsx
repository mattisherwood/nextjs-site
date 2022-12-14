import type { Props as AvatarProps } from "avataaars"
import Avatar from "avataaars"
import Image from "next/image"
import { Card, Container, Grid } from ".."
import classes from "./PeopleBlock.module.css"

type Props = {
  type: "people"
  people: {
    id: number
    firstName: string
    lastName: string
    avatar?: AvatarProps
    bio: string
    image?: string
  }[]
}

export const PeopleBlock = ({ people }: Props) => (
  <section>
    <Container>
      <Grid columns={2}>
        {people.map(({ id, firstName, lastName, bio, image, avatar }) => (
          <Card
            title={`${firstName} ${lastName}`}
            description={bio}
            image={
              avatar ? (
                <Avatar {...avatar} className={classes.avatar} />
              ) : (
                image && (
                  <Image
                    src={image}
                    alt={`${firstName} ${lastName}`}
                    width={100}
                    height={100}
                    className={classes.image}
                  />
                )
              )
            }
            key={id}
          />
        ))}
      </Grid>
    </Container>
  </section>
)
