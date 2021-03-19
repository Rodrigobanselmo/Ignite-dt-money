import React from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>100</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- 500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>500</strong>
      </div>
    </Container>
  );
};
