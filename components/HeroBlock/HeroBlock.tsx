import { Container } from ".."
import classes from "./HeroBlock.module.css"
type Props = {
  type: "hero"
  title: string
  subtitle: string
}

export const HeroBlock = ({ subtitle, title }: Props) => {
  return (
    <section className={classes.root}>
      <Container size='small'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Container>
    </section>
  )
}
