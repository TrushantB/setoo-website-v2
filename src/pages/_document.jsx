import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat+Alternates:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Urbanist:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      <link rel="stylesheet" href="https://use.typekit.net/oyq2jzs.css" />
      </Head>
      <body className="black-bg">
        <div id="root">
          <Main />
          <NextScript />
        </div>
        <GoogleAnalytics gaId="G-VWN5PF9S3M" />
      </body>
    </Html>
  );
}
