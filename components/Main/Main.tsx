import { ReactNode } from "react"
import { Container, Hero } from ".."
import classes from "./Main.module.css"

type Props = {
  children: ReactNode
  content: { title: string; description: string }
}

export const Main = ({ children, content }: Props) => (
  <main className={classes.main}>
    <Hero content={content} />
    <div className={classes.content}>
      <Container>{children}</Container>
    </div>
  </main>
)
