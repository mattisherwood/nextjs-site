import { ComponentMeta } from "@storybook/react"
import { Card } from ".."
import { Grid } from "./Grid"

export default {
  component: Grid,
} as ComponentMeta<typeof Grid>

const cards = [
  { title: "Card 1" },
  { title: "Card 2" },
  { title: "Card 3" },
  { title: "Card 4" },
  { title: "Card 5" },
  { title: "Card 6" },
  { title: "Card 7" },
  { title: "Card 8" },
]

export const Base = () => (
  <Grid>
    {cards.map(({ title }) => (
      <Card title={title} />
    ))}
  </Grid>
)
