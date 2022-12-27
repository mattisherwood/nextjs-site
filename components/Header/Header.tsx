import clsx from "clsx"
import { Container, Link } from ".."
import { PageType } from "../../types"

import classes from "./Header.module.css"
type Props = {
  currentPage?: string
  pages: PageType[]
}

export const Header = ({ currentPage, pages }: Props) => {
  return (
    <header className={classes.header}>
      <Container size='large'>
        <nav className={classes.navigation}>
          {pages.map(({ slug, shortTitle, url }) => (
            <Link
              className={clsx(
                classes.link,
                slug == "home" && classes.home,
                currentPage == slug && classes.current
              )}
              href={url}
              key={slug}
            >
              {shortTitle}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
