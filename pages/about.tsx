import Link from "next/link"
import { Footer, Head, Header, Main } from "../components"
import { pages } from "../fixtures"

const content = pages[1]

export default function Page() {
  return (
    <>
      <Head title={content.title} />
      <Header currentPage={content.shortTitle} />
      <Main content={content}>
        <h2>Base</h2>
        <p>
          This was first bootstrapped with <code>npx create-next-app</code>, but
          has extra bits added.
        </p>
        <h2>Extras</h2>
        <ul>
          <li>
            <strong>Centralised components &amp; linked CSS + stories</strong>
            <br />
            <em>
              These are separated from the pages so they can be used across
              multiple pages.
            </em>
          </li>
          <li>
            <strong>Fixtures</strong>
            <br />
            <em>
              So hardcoded data can be used until it can be swapped out with
              data from an API.
            </em>
          </li>
          <li>
            <strong>Base content</strong>
            <br />
            <em>A few standard pages that most sites need.</em>
            <ul>
              <li>Homepage</li>
              <li>About page</li>
              <li>Team page</li>
              <li>Contact page</li>
            </ul>
          </li>
          <li>
            <strong>
              <Link href='https://storybook.js.org/' target='_blank'>
                Storybook
              </Link>
            </strong>
            <ul>
              <li>
                Install Storybook for NextJS{" "}
                <em>
                  (As described in{" "}
                  <Link
                    href='https://storybook.js.org/blog/get-started-with-storybook-and-next-js/'
                    target='_blank'
                  >
                    this Storybook blog article
                  </Link>
                  )
                </em>
              </li>
              <li>
                Stories moved to be stored alongside each component & sorted
                into levels based on atomic design principles
              </li>
              <li>
                Fix so Next Image will work inside of Storybook{" "}
                <em>
                  (As described in{" "}
                  <Link
                    href='https://storybook.js.org/blog/get-started-with-storybook-and-next-js/'
                    target='_blank'
                  >
                    this Storybook blog article
                  </Link>
                  )
                </em>
              </li>
              <li>
                <Link
                  href='https://storybook.js.org/addons/@storybook/addon-a11y/'
                  target='_blank'
                >
                  A11y accessibility addon
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <Link href='https://www.npmjs.com/package/clsx' target='_blank'>
                CLSX
              </Link>
            </strong>
            <br />
            <em>
              A useful tool for combining class names in the{" "}
              <code>className</code> prop.
            </em>
          </li>
          <li>
            <strong>CSS Restructure</strong>
            <ul>
              <li>
                Component-specific styles stored alongside each component using
                CSS Modules
              </li>
              <li>
                Global styles stored centrally
                <ul>
                  <li>variables.css</li>
                  <li>global.css</li>
                  <li>typography.css</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Hero Block</strong>
            <br />
            <em>Commonly used block used across all pages</em>
          </li>
        </ul>
        <h2>Next Up</h2>
        <p>These haven&apos;t been added yet, but </p>
        <ul>
          <li>
            <strong>Content Blocks</strong>
            <br />
            <em>
              Especially a markdown block so basic rich-text content like this
              can be stored in a fixture or a CMS.
              <br />
              Maybe use{" "}
              <Link
                href='https://www.npmjs.com/package/markdown-to-jsx'
                target='_blank'
              >
                markdown-to-jsx
              </Link>{" "}
              or{" "}
              <Link
                href='https://www.npmjs.com/package/react-markdown'
                target='_blank'
              >
                react-markdown
              </Link>
              ?
            </em>
          </li>
          <li>
            <strong>Link Component</strong>
            <br />
            <em>
              Make custom <code>Link</code> component so{" "}
              <code>target=&apos;blank&apos;</code> gets handled
              programatically.
            </em>
          </li>
          <li>
            <strong>Expand on &apos;People&apos;</strong> including...
            <ul>
              <li>
                Using{" "}
                <Link href='https://getavataaars.com/' target='_blank'>
                  Avataar
                </Link>
              </li>
              <li>Having a page per person</li>
            </ul>
          </li>
          <li>
            <strong>Projects</strong>
            <br />
            <em>Often useful for company &amp; portfolio sites.</em>
          </li>
          <li>
            <strong>Tags</strong>
            <br />
            <em>
              So you can tag projects and team members with tags such as the
              type of work, skills or department etc.
            </em>
          </li>
        </ul>
        <h2>Not Included</h2>
        <p>These have been purposefully left out.</p>
        <ul>
          <li>
            <strong>
              Component Library such as{" "}
              <Link href='https://mui.com/' target='_blank'>
                MUI
              </Link>
            </strong>
            <br />
            <em>
              This site is currently too simple to need MUI. If it needs a
              couple of extra components they can be custom made.
              <br />
              I&apos;m trying not to add stuff to this boilerplate if it&apos;s
              not needed.
            </em>
          </li>
        </ul>
      </Main>
      <Footer />
    </>
  )
}
