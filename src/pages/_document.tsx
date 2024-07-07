import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <title>Amazon Clone App</title>
      </Head>
      <body className="custom-body-class">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
