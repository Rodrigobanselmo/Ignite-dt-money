import React from 'react';
import { Container } from './styles';
import { Summary } from '../Summary';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
    </Container>
  );
};
