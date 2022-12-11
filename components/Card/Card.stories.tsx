import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Card } from "./Card"

export default {
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Link = Template.bind({})
export const NoLink = Template.bind({})
export const ProfileCard = Template.bind({})
Link.args = {
  title: "Title",
  description: "This card has a link to Google",
  url: "https://www.google.com/",
}
NoLink.args = {
  title: "Card with no link",
  description: "This card has a link to Google",
}
ProfileCard.args = {
  title: "Jane Doe",
  description: "Bio goes here",
  image: {
    src: "https://i.pravatar.cc/300?img=1",
    alt: "Profile Image",
    width: 75,
    height: 75,
  },
}
