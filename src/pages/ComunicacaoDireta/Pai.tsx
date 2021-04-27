import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Filho} from './Filho';

// import { Container } from './styles';

const Pai: React.FC = () => {
  let x = 100;
  let y = 15;
  return (
    <View style={styles.container}>
      <Filho num1={x} num2={y} />
      <Filho num1={x + 20} num2={y + 50} />
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
