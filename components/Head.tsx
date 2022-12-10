import NextHead from "next/head"

type Props = {
  title: string
}

export const Head = ({ title }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name='description' content='Using React/Typescript' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  )
}
