import { Link } from "./Link"

export const Base = () => (
  <ul>
    <li>
      <Link href='about'>Relative Link</Link>
    </li>
    <li>
      <Link href='/about'>Root Relative Link</Link>
    </li>
    <li>
      <Link href='https://www.google.com'>External Link</Link>
    </li>
    <li>
      <Link href='#section'>Anchor Link</Link>
    </li>
  </ul>
)

export default {
  component: Link,
  title: "atoms/Link",
}
