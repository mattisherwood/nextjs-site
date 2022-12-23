import { ReactNode } from "react"
import { Link } from ".."
import classes from "./Card.module.css"

type Props = {
  title: string
  description?: string
  url?: string
  image?: ReactNode
  avatar?: ReactNode
}

type WrapperProps = {
  children: ReactNode
  url?: string
}

export const Card = ({ title, description, url, image, avatar }: Props) => (
  <CardWrapper url={url}>
    {image && image}
    {avatar && avatar}
    <div className={classes.content}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  </CardWrapper>
)

const CardWrapper = ({ children, url }: WrapperProps) =>
  url ? (
    <Link href={url} className={classes.card}>
      {children}
    </Link>
  ) : (
    <div className={classes.card}>{children}</div>
  )
