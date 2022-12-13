import * as NextImage from "next/image"
import "../styles/globals.css"
import "../styles/typography.css"
import "../styles/variables.css"

// De-optimize Next.js Image only in stories
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Atoms", "Molecules", "Organisms", "Templates"],
    },
  },
}
