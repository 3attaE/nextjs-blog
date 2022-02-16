import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === "production";
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction };
  }
  render() {
    const { isProduction } = this.props as any;

    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Noto+Serif+SC:wght@600;700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          {isProduction && (
            <>
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
            </>
          )}
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
