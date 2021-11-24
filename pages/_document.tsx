import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            as="link"
            rel="preconnect"
            href="https://cdn.jsdelivr.net"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            as="style"
            rel="preload"
            href="https://cdn.jsdelivr.net/gh/pengx17/source-fonts@0.0.5/fonts.css"
          />
          <link
            href="https://cdn.jsdelivr.net/gh/pengx17/source-fonts@0.0.5/fonts.css"
            rel="stylesheet"
          />
          {/* https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
