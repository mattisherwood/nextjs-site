import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Card } from "./Card"

export default {
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Link = Template.bind({})
export const NoLink = Template.bind({})
Link.args = {
  title: "Title",
  description: "This card has a link to Google",
  url: "https://www.google.com/",
}
NoLink.args = {
  title: "Title",
  description: "This card doesn't have a link",
}
