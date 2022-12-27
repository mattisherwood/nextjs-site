import type { Props as AvatarProps } from "avataaars"

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

export type PageType = {
  slug: string
  metadata: {
    description: string
    title: string
  }
  shortDescription: string
  shortTitle: string
  url: string
  contentBlocks: ContentBlock[]
}
