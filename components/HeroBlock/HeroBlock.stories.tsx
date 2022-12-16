import { ComponentMeta, ComponentStory } from "@storybook/react"
import { HeroBlock } from "./HeroBlock"

export default {
  title: "Organisms/HeroBlock",
  component: HeroBlock,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof HeroBlock>

const Template: ComponentStory<typeof HeroBlock> = (args) => (
  <HeroBlock {...args} />
)

export const Base = Template.bind({})
Base.args = {
  title: "Title",
  subtitle: "Subtitle",
}
