import NextLink, { LinkProps } from "next/link"
import { ReactNode } from "react"

type Props = LinkProps & {
  children: ReactNode
  className?: string
}

const isExternal = (href: LinkProps["href"]) => {
  return /^https?:/.test(href as string)
}

export const Link = ({ ...props }: Props) => (
  <NextLink
    {...{ ...props, target: isExternal(props.href) ? "_blank" : undefined }}
  />
)
