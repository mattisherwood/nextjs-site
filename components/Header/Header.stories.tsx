import { ComponentMeta, ComponentStory } from "@storybook/react"
import { pages } from "../../fixtures"
import { Header } from "./Header"

export default {
  title: "Templates/Header",
  component: Header,
  argTypes: {
    currentPage: {
      control: "inline-radio",
      options: pages.map((page) => page.shortTitle),
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Base = Template.bind({})

Base.args = {
  currentPage: "Home",
}
