import { ComponentMeta, ComponentStory } from "@storybook/react"
import type { Props as AvatarProps } from "avataaars"
import Avatar from "avataaars"
import { people } from "../../fixtures"
import { Card } from "./Card"

const avatar = people[0].avatar as AvatarProps

export default {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Link = Template.bind({})
Link.args = {
  title: "Title",
  description: "This card has a link to Google",
  url: "https://www.google.com/",
}
export const NoLink = Template.bind({})
NoLink.args = {
  title: "Card with no link",
  description: "This card has a link to Google",
}
export const ProfileCard = Template.bind({})
ProfileCard.args = {
  title: "Jane Doe",
  description: "Bio goes here",
  image: <Avatar {...avatar} />,
}
