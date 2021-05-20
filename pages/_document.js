import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <script async defer data-website-id="7f52a2a6-d723-4ba0-b7a1-a8312e427ce2" src="https://data.lilvibeyloser.tk/umami.js"></script>
        </ Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
