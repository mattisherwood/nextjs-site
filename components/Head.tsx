import NextHead from "next/head"

type Props = {
  title: string
}

const websiteTitle = "NextJS Website"

export const Head = ({ title }: Props) => {
  return (
    <NextHead>
      <title>
        {title != "Home" ? `${title} | ` : null}
        {websiteTitle}
      </title>
      <meta name='description' content='Using React/Typescript' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  )
}
