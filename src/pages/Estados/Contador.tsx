import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

// import { Container } from './styles';
interface IProps {
  inicial?: number;
}
export const Contador: React.FC<IProps> = ({inicial = 0}) => {
  /* let contador = inicial; */
  const [contador, setContador] = useState(inicial);

  function incremento() {
    setContador(contador + 1);
    /* contador = contador + 1;
    console.warn(contador); */
  }
  function decremento() {
    /* contador = contador - 1;
    console.log(contador); */
    setContador(contador - 1);
  }
  return (
    <View style={styles.container}>
      <Text>Contador Estado: {contador}</Text>

      <View style={styles.container2}>
        <Button title="+" onPress={() => incremento()} />
        <Button title="-" onPress={() => decremento()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
