import { ComponentMeta } from "@storybook/react"

import { Header } from "./Header"

export default {
  // title: "Button",
  component: Header,
} as ComponentMeta<typeof Header>

export const Base = () => <Header currentPage='Home' />
