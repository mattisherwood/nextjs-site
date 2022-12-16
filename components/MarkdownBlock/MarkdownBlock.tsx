import ReactMarkdown from "react-markdown"
import { Container } from ".."

type Props = {
  type: "markdown"
  content: string
}

export const MarkdownBlock = ({ content }: Props) => (
  <section>
    <Container size='small'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  </section>
)
