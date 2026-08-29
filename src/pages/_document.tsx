import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0f0f1e"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
