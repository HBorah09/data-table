import React from 'react';
import { Container, Spinner } from './style';

const Loader = () => {
  return (
      <Container aria-label='Data is loading.....'>
        <Spinner />
      </Container>
  );
};

export default Loader;
