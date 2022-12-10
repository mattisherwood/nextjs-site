import Link from "next/link"
import classes from "./Card.module.css"

type Props = {
  title: string
  description: string
  url: string
}

export const Card = ({ title, description, url }: Props) => {
  return (
    <Link href={url} className={classes.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </Link>
  )
}
