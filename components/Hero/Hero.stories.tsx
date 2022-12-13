import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Hero } from "./Hero"

export default {
  title: "Organisms/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Base = Template.bind({})
Base.args = {
  content: { title: "Title", description: "Description" },
}
