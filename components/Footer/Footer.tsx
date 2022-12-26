import Image from "next/image"
import { Container, Link } from ".."
import classes from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container size='large'>
        <p>
          Powered by{" "}
          <Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
            <Image
              className={classes.logo}
              src='/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </Link>
        </p>
      </Container>
    </footer>
  )
}
