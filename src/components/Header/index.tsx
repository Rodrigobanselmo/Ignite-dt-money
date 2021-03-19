/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTranslationModal: () => void;
}

export const Header = ({ onOpenNewTranslationModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTranslationModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
