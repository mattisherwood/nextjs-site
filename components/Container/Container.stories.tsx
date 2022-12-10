import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Container } from "./Container"

export default {
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <h2>Container</h2>
    <p>
      This text content is inside of a container. Please change the size of the
      container in the controls below.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
      accumsan ipsum. Suspendisse potenti. Pellentesque auctor lacus tortor, in
      pretium ante venenatis eget. Morbi varius quis orci eu pretium. Morbi a
      tristique erat, quis tristique tellus. Aliquam eu lectus augue. Sed
      hendrerit lobortis dui et porttitor.
    </p>
    <p>
      Phasellus elementum faucibus turpis a venenatis. Donec vulputate libero eu
      pharetra pulvinar. Donec purus dolor, sollicitudin vitae pulvinar a,
      viverra quis mauris. Mauris luctus magna id ante pellentesque
      sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Nulla eget bibendum leo. Aliquam erat volutpat. Aenean congue
      nibh nec massa ornare maximus. Duis a tellus varius, ultrices massa nec,
      pretium tortor. Aliquam faucibus augue et ligula lacinia malesuada. Etiam
      rutrum consectetur arcu, et aliquam turpis semper sit amet. Vestibulum
      lacus urna, luctus a magna ut, sodales pulvinar dolor.
    </p>
    <p>
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
      lacus metus, vulputate ut iaculis ac, sollicitudin non velit. Morbi a
      mollis magna. Ut pellentesque mauris leo, id hendrerit nulla vestibulum
      nec. Cras nec orci libero. Sed nec scelerisque eros. Ut at purus et ligula
      tempus viverra. Quisque condimentum auctor est, et porttitor metus aliquet
      a.
    </p>
    <p>
      Vivamus cursus, lectus non efficitur aliquet, ligula erat facilisis
      turpis, eu rutrum tortor nulla at augue. Fusce ac justo non elit ultricies
      facilisis. Nulla enim mi, venenatis eu tristique ut, aliquet vel turpis.
      Curabitur efficitur nulla in purus volutpat condimentum. Sed efficitur
      metus faucibus magna condimentum, ac condimentum dolor lacinia. Fusce
      consequat arcu lobortis, hendrerit quam quis, tristique nunc. Vivamus
      consectetur eros ipsum, sollicitudin suscipit risus pharetra nec. In hac
      habitasse platea dictumst. Donec ante tortor, bibendum at pulvinar a,
      pellentesque id augue. Aenean sollicitudin enim sit amet pellentesque
      pretium. Vestibulum nec turpis sit amet nunc luctus maximus eget eu justo.
      Nunc ut accumsan orci, nec viverra quam. Aenean volutpat mauris id nisl
      viverra, vel vestibulum leo ultricies.
    </p>
    <p>
      Proin placerat diam ligula, eget placerat velit facilisis a. Maecenas
      feugiat massa velit, bibendum dapibus arcu mollis eget. Integer sagittis
      dui metus, mattis eleifend dui sodales ac. Maecenas eu nulla mattis dolor
      fringilla dignissim mollis non enim. Nam consequat tincidunt pellentesque.
      Sed eu condimentum neque. Proin nunc diam, suscipit sed lorem a,
      pellentesque pulvinar tortor. Sed varius metus ut tempus vulputate.
    </p>
  </Container>
)

export const Base = Template.bind({})
Base.args = {
  size: "medium",
}
