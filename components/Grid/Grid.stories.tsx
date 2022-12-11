import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Card } from ".."
import { Grid } from "./Grid"

export default {
  component: Grid,
  argTypes: {
    columns: {
      control: { type: "number", min: 0, max: 6 },
    },
  },
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

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    {cards.map(({ title }) => (
      <Card title={title} />
    ))}
  </Grid>
)

export const Base = Template.bind({})
Base.args = {
  columns: 0,
}
