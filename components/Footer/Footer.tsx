import Image from "next/image"
import { Container } from ".."
import classes from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container size='large'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span className={classes.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </Container>
    </footer>
  )
}
