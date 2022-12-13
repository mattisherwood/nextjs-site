import { Container } from ".."
import classes from "./Hero.module.css"
type Props = {
  content: { title: string; description: string }
}

export const Hero = ({ content }: Props) => {
  return (
    <div className={classes.root}>
      <Container size='small'>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </Container>
    </div>
  )
}
