import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat+Alternates:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Urbanist:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      <link rel="stylesheet" href="https://use.typekit.net/oyq2jzs.css" />
        {/* Google Analytics Script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-VWN5PF9S3M`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VWN5PF9S3M', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body className="black-bg">
        <div id="root">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
