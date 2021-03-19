import React from 'react';
import { Container } from './styles';
import { Summary } from '../Summary';
import { TransectionsTable } from '../TransactionsTable';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransectionsTable />
    </Container>
  );
};
