import { Card, Footer, Head, Header } from "../components"
import { pages } from "../fixtures"
import classes from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={classes.container}>
      <Head title='Home' />
      <Header currentPage='Home' />
      <main className={classes.main}>
        <h1 className={classes.title}>Welcome to this NextJS Website</h1>
        <h2 className={classes.subtitle}>Using React/Typescript</h2>
        <div className={classes.grid}>
          {pages.map(({ title, description, url }) => (
            <Card title={title} description={description} url={url} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
