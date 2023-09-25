import React from 'react';
import Routes from './Routes';
import ListProvider from './ListProvider';

const Index = () => {
  return (
    <ListProvider>
      <Routes />
    </ListProvider>
  );
};

export default Index;
