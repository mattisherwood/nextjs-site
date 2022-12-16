import NextHead from "next/head"

type Props = {
  description: string
  title: string
}

const websiteTitle = "NextJS Website"

export const Head = ({ description, title }: Props) => {
  return (
    <NextHead>
      <title>
        {title != "Home" ? `${title} | ` : null}
        {websiteTitle}
      </title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  )
}
