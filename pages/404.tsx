import React, { ReactElement } from 'react';
import Link from 'next/link';
import ErrorLayout from '@layout/ErrorLayout';

const NotFound = (): JSX.Element => {
  return <></>;
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <ErrorLayout>{page}</ErrorLayout>;
};

export default NotFound;
