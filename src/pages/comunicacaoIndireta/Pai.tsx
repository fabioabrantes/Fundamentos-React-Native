import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Filho} from './Filho';

// import { Container } from './styles';

const Pai: React.FC = () => {
  const [texto, setTexto] = useState('');
  const [num, setNum] = useState(0);

  function exibirValor(num: number, texto: string): void {
    setNum(num);
    setTexto(texto);
  }
  return (
    <View style={styles.container}>
      <Filho min={50} max={100} funcao={exibirValor} />
      <Text>
        {texto}
        {num}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Pai;
