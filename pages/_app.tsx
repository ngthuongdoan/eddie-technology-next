import '../styles/global.scss';
import '@plugins/index';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import DefaultLayout from '@layout/DefaultLayout';
import store from '@store/index';
import { cartActions } from '@store/modules/cart/reducer';
import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const getTodosFromLocalStorage = () => {
      const persistedState = localStorage.getItem('cart');
      if (persistedState) return JSON.parse(persistedState);

      return null;
    };

    const cart = getTodosFromLocalStorage();
    if (cart) {
      store.dispatch(cartActions.hydrate(cart));
    }
  }, []);

  const getLayout = Component.getLayout || ((page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}
export default MyApp;
