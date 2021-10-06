import { Html, Head, Main, NextScript } from 'next/document';

export default () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="backdrop-overlay"></div>
        <div id="loading-overlay"></div>
        <NextScript />
      </body>
    </Html>
  );
};
