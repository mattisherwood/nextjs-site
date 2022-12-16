import { ComponentMeta, ComponentStory } from "@storybook/react"
import { people } from "../../fixtures"
import { PeopleBlock } from "./PeopleBlock"

export default {
  title: "organisms/PeopleBlock",
  component: PeopleBlock,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PeopleBlock>

const Template: ComponentStory<typeof PeopleBlock> = (args) => (
  <PeopleBlock {...args} />
)

export const Base = Template.bind({})
Base.args = {
  people: people,
}
