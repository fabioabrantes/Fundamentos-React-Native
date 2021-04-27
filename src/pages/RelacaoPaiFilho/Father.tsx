import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// import { Container } from './styles';

export const Father: React.FC = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <Text style={styles.txtG}>[Início] Membros da família</Text>
      {children}
      <Text style={styles.txtG}>[Fim] Membros da família</Text>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  txtG: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
