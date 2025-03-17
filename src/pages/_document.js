import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="https://terralemon.nl/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://terralemon.nl/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://terralemon.nl/favicon-16x16.png" />
        <link rel="manifest" href="https://terralemon.nl/site.webmanifest" />
        <link rel="mask-icon" href="https://terralemon.nl/safari-pinned-tab.svg" color="#00b1dd" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#00b1dd" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 