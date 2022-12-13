import clsx from "clsx"
import Link from "next/link"
import { Container } from ".."
import { pages } from "../../fixtures"
import classes from "./Header.module.css"
type Props = {
  currentPage: string
}

export const Header = ({ currentPage }: Props) => {
  return (
    <header className={classes.header}>
      <Container size='large'>
        <nav className={classes.navigation}>
          {pages.map(({ id, shortTitle, url }) => (
            <Link
              className={clsx(
                classes.link,
                currentPage == shortTitle && classes.current
              )}
              href={url}
              key={id}
            >
              {shortTitle}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
