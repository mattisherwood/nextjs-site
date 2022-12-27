import { HeroBlock, MarkdownBlock, PageListBlock, PeopleBlock } from ".."
import { ContentBlock } from "../../types"
import classes from "./Main.module.css"

type Props = {
  contentBlocks: ContentBlock[]
}

export const Main = ({ contentBlocks }: Props) => (
  <main className={classes.main}>
    {contentBlocks.map((block) => {
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
  </main>
)
