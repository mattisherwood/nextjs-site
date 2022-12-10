import { ComponentMeta } from "@storybook/react"

import { Main } from "./Main"

export default {
  component: Main,
} as ComponentMeta<typeof Main>

export const Base = () => <Main>This is the main part of the site.</Main>
