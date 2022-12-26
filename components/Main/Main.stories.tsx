import { ComponentMeta, ComponentStory } from "@storybook/react"
import { pages } from "../../fixtures"
import { Container } from "../Container"
import type { ContentBlock } from "./Main"
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
  contentBlocks: pages[0].contentBlocks as ContentBlock[],
}
