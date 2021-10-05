import React, { Suspense, useEffect } from 'react';
import TheHeader from '@components/UI/TheHeader/TheHeader';
import TheFooter from '@components/UI/TheFooter/TheFooter';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { asyncData } from '@store/modules/cached/action';
import { transitions, positions, AlertProviderProps, Provider as AlertProvider, types } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

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
      <AlertProvider {...options}>
        <TheHeader />
        <main>{props.children}</main>
        <TheFooter />
      </AlertProvider>
    </>
  );
};

export default DefaultLayout;
