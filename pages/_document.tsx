import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <html>
        <Head>
          <link
              rel="preload"
              href="/fonts/starjedi/Starjedi.ttf"
              as="font"
              crossOrigin=""
            />
          <link
              rel="preload"
              href="/fonts/starjedi/Starjhol.ttf"
              as="font"
              crossOrigin=""
            />
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
