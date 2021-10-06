import React from 'react';
import ClassNameProps from '@model/ClassNameProps';
import Portal from '../Portal/Portal';

type OverlayProps = {
  close?: () => void;
};

const defaultProps = {
  close: () => {},
};

const LoadingOverlay: React.FC<OverlayProps & ClassNameProps> = ({ className, close }): JSX.Element => {
  return (
    <div className={`backdrop ${className}`} onClick={close} aria-hidden="true">
      <div className="modal">
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const Loading: React.FC<OverlayProps & ClassNameProps> = ({ className, close }): JSX.Element => {
  return (
    <>
      <Portal id="loading-overlay">
        <LoadingOverlay close={close}></LoadingOverlay>
      </Portal>
    </>
  );
};

LoadingOverlay.defaultProps = defaultProps;
Loading.defaultProps = defaultProps;

export default React.memo(Loading);
