import { ReactNode } from "react"
import { HeroBlock, MarkdownBlock, PageListBlock, PeopleBlock } from ".."
import classes from "./Main.module.css"

type Props = {
  children: ReactNode
  contentBlocks: (
    | { type: "hero"; title: string; subtitle: string }
    | { type: "markdown"; content: string }
    | { type: "pageList" }
    | {
        type: "people"
        people: {
          id: number
          firstName: string
          lastName: string
          image: string
          bio: string
        }[]
      }
  )[]
}

export const Main = ({ contentBlocks, children }: Props) => (
  <main className={classes.main}>
    {contentBlocks.map((block) => {
      console.log(block)
      switch (block.type) {
        case "hero":
          return <HeroBlock {...block} />
        case "markdown":
          return <MarkdownBlock {...block} />
        case "pageList":
          return <PageListBlock {...block} />
        case "people":
          return <PeopleBlock {...block} />
        default:
          return <p>Unknown blocktype</p>
      }
    })}
    {children}
  </main>
)
