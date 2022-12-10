import Link from "next/link"
import { ReactNode } from "react"
import classes from "./Card.module.css"

type Props = {
  title: string
  description?: string
  url?: string
}

type WrapperProps = {
  children: ReactNode
  url?: string
}

export const Card = ({ title, description, url }: Props) => (
  <CardWrapper url={url}>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
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
