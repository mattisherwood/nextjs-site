import { ComponentMeta, ComponentStory } from "@storybook/react"
import { PageListBlock } from "./PageListBlock"

export default {
  title: "organisms/PageListBlock",
  component: PageListBlock,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PageListBlock>

const Template: ComponentStory<typeof PageListBlock> = (args) => (
  <PageListBlock {...args} />
)

export const Base = Template.bind({})
Base.args = {}
