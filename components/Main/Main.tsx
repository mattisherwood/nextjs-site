import type { Props as AvatarProps } from "avataaars"
import { HeroBlock, MarkdownBlock, PageListBlock, PeopleBlock } from ".."
import classes from "./Main.module.css"

export type ContentBlock =
  | { type: "hero"; title: string; subtitle: string }
  | { type: "markdown"; content: string }
  | { type: "pageList" }
  | {
      type: "people"
      people: {
        id: number
        firstName: string
        lastName: string
        image?: string
        bio: string
        avatar?: AvatarProps
      }[]
    }

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
