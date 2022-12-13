import Image from "next/image"
import Link from "next/link"
import { Container } from ".."
import classes from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container size='large'>
        <p>
          Powered by{" "}
          <Link
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
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
