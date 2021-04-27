import React from 'react';
import {Button} from 'react-native';

import styled from 'styled-components/native';

interface IPropsEstilizacao {
  cor?: boolean;
  tamanho?: string;
}
interface IStyledComponents {
  name: string;
}
export const StyledComponents: React.FC<IStyledComponents> = ({name}) => {
  return (
    <Caixa>
      <Texto tamanho="25px" cor={true}>
        {name}
      </Texto>
      <Texto tamanho="30px" cor={false}>
        {name}
      </Texto>
      <BotaoSalvar>
        <Texto tamanho="30px"> clica aqui</Texto>
      </BotaoSalvar>
      <Button title="oiiiiiiii" onPress={() => {}} />
    </Caixa>
  );
};

const Caixa = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text<IPropsEstilizacao>`
  color: ${props => (props.cor ? 'black' : 'white')};
  font-size: ${props => props.tamanho};
  font-weight: bold;
`;
const BotaoSalvar = styled.TouchableOpacity`
  background-color: green;
`;
