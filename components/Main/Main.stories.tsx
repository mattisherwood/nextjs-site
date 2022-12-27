import { ComponentMeta, ComponentStory } from "@storybook/react"
import { pages } from "../../fixtures"
import type { ContentBlock } from "../../types"
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

export const Home = Template.bind({})
Home.args = {
  contentBlocks: pages[0].contentBlocks as ContentBlock[],
}
export const About = Template.bind({})
About.args = {
  contentBlocks: pages[1].contentBlocks as ContentBlock[],
}
export const Team = Template.bind({})
Team.args = {
  contentBlocks: pages[2].contentBlocks as ContentBlock[],
}
export const Contact = Template.bind({})
Contact.args = {
  contentBlocks: pages[3].contentBlocks as ContentBlock[],
}
