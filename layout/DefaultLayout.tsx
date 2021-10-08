import React, { useEffect } from 'react';
import TheHeader from '@components/UI/TheHeader/TheHeader';
import TheFooter from '@components/UI/TheFooter/TheFooter';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { asyncData } from '@store/modules/cached/action';
import { transitions, positions, AlertProviderProps, Provider as AlertProvider, types } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Head from 'next/head';

const options: AlertProviderProps = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '30px',
  template: AlertTemplate,
  type: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const DefaultLayout: React.FC = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncData());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Eddie Technology</title>
        <meta
          name="description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        />
        <meta property="og:title" content="Eddie Technology" />
        <meta property="og:site_name" content="Eddie Technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eddie-technology.web.app/" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        <meta
          property="og:image:url"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        />
        <meta
          property="og:description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="https://eddie-technology.web.app/"></meta>
        <meta name="twitter:title" content="Eddie Technology"></meta>
        <meta
          name="twitter:description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        ></meta>
        <meta
          name="twitter:image:src"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        ></meta>
        <meta property="twitter:image:width" content="600" />
        <meta property="twitter:image:height" content="314" />
        <meta itemProp="name" content="Eddie Technology"></meta>
        <meta
          itemProp="description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        ></meta>
        <meta
          itemProp="image"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        ></meta>
        <meta property="image:width" content="600" />
        <meta property="image:height" content="314" />
        {/* <link rel="canonical" href="https://eddie-technology.web.app"></link> */}
      </Head>
      <AlertProvider {...options}>
        <TheHeader />
        <main>{props.children}</main>
        <TheFooter />
      </AlertProvider>
    </>
  );
};

export default DefaultLayout;
