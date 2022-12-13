import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Container } from "../Container"
import { Main } from "./Main"

export default {
  title: "Templates/Main",
  component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => (
  <Main {...args}>
    <Container>
      <p>Other content blocks will go here.</p>
    </Container>
  </Main>
)

export const Base = Template.bind({})
Base.args = {
  content: { title: "Title", description: "Description" },
}
