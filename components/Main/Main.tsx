import { ReactNode } from "react"
import { Container } from ".."
import classes from "./Main.module.css"

type Props = {
  children: ReactNode
}

export const Main = ({ children }: Props) => (
  <main className={classes.main}>
    <Container size='small'>{children}</Container>
  </main>
)
