import React from 'react';
import ProgressBar from '@site/src/components/ProgressBar';

export default function Root({ children }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
