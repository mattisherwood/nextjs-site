import { Footer, Head, Header } from "../components"
import styles from "../styles/Home.module.css"

const title = "Contact"

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head title={title} />
      <Header title={title} />
      <main className={styles.main}>
        <h1 className={styles.title}>This is the {title} Page!</h1>
      </main>
      <Footer />
    </div>
  )
}
