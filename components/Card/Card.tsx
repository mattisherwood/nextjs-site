import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import classes from "./Card.module.css"

type Props = {
  title: string
  description?: string
  url?: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

type WrapperProps = {
  children: ReactNode
  url?: string
}

export const Card = ({ title, description, url, image }: Props) => (
  <CardWrapper url={url}>
    {image && <Image {...image} />}
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
