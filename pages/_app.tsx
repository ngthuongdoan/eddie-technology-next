import '../styles/global.scss';
import '@plugins/index';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import DefaultLayout from '@layout/DefaultLayout';
import store from '@store/index';
import { cartActions } from '@store/modules/cart/reducer';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />;
      </DefaultLayout>
    </Provider>
  );
}
export default MyApp;
