import { Card, Container, Grid } from ".."
import { pages } from "../../fixtures"

type Props = { type: "pageList" }

export const PageListBlock = ({}: Props) => (
  <section>
    <Container size='small'>
      <Grid>
        {pages.map(({ id, shortTitle, shortDescription, url }) => (
          <Card
            title={shortTitle}
            description={shortDescription}
            url={url}
            key={id}
          />
        ))}
      </Grid>
    </Container>
  </section>
)
