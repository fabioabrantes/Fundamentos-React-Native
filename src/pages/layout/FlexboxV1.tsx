import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Quadrado} from './Quadrado';
// import { Container } from './styles';

export const FlexBoxV1: React.FC = () => {
  return (
    <Container>
      <Quadrado cor="#ff801a" lado={50} />
      <Quadrado cor="#6289bd" lado={50} />
      <Quadrado cor="#a82323" lado={50} />
      <Quadrado cor="#16c43c" lado={50} />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`;
