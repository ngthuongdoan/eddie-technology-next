// import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import DefaultLayout from '@layout/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />;
    </DefaultLayout>
  );
}
export default MyApp;
