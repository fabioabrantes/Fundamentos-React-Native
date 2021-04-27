import React from 'react';
import styled from 'styled-components/native';

// import { Container } from './styles';
interface IProps {
  cor?: string;
  lado?: number;
}
export const Quadrado: React.FC<IProps> = ({cor, lado}) => {
  return <Caixa lado={lado} cor={cor} />;
};

const Caixa = styled.View<IProps>`
  height: ${props => props.lado || 50};
  width: ${props => props.lado || 50};
  background-color: ${props => props.cor || '#000'};
`;
