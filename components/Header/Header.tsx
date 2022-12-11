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
          {pages.map(({ menuLabel, url }) => (
            <Link
              className={clsx(
                classes.link,
                currentPage == menuLabel && classes.current
              )}
              href={url}
            >
              {menuLabel}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
