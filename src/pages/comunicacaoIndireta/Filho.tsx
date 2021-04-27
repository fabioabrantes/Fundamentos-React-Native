import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

// import { Container } from './styles';
interface IProps {
  min: number;
  max: number;
  funcao(num1: number, texto: string): void;
}
export const Filho: React.FC<IProps> = ({min, max, funcao}) => {
  function gerarNumero(min1: number, max1: number) {
    const fator = max1 - min + 1;
    return Math.round(Math.random() * fator) + min1;
  }

  return (
    <View>
      <Button
        title="Executar"
        onPress={() => {
          const n = gerarNumero(min, max);
          funcao(n, 'O valor é:');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  txtG: {
    fontSize: 20,
    textAlign: 'center',
  },
});
