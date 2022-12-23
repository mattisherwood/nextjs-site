import { ReactNode } from "react"
import { Link } from ".."
import classes from "./Card.module.css"

type Props = {
  title: string
  description?: string
  image?: ReactNode
  url?: string
}

type WrapperProps = {
  children: ReactNode
  url?: string
}

export const Card = ({ title, description, image, url }: Props) => (
  <CardWrapper url={url}>
    {image && image}
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
