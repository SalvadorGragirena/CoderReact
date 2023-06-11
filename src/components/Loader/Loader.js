import React from 'react';
import { SpinnerCircular } from 'spinners-react';

const Loader = () => {
  return (
    <div
      style={{
        width: '100vw',
        heigth: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SpinnerCircular color="#c737d7" size={90} />
    </div>
  );
};

export default Loader;