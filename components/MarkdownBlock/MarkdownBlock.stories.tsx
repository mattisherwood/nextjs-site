import { ComponentMeta, ComponentStory } from "@storybook/react"
import { MarkdownBlock } from "./MarkdownBlock"

export default {
  title: "organisms/MarkdownBlock",
  component: MarkdownBlock,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof MarkdownBlock>

const Template: ComponentStory<typeof MarkdownBlock> = (args) => (
  <MarkdownBlock {...args} />
)

export const Base = Template.bind({})
Base.args = {
  content: "This is a markdown block.",
}
