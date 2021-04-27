import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

// import { Container } from './styles';

export const Usuario: React.FC = () => {
  const [nameUser, setNameUser] = useState('');
  const [lastName, setLastName] = useState('');
  const handleClick = () => {
    setLastName(nameUser);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nameUser}
        onChangeText={name => setNameUser(name)}
      />
      <Text>Ola {nameUser}</Text>
      <Button title="salvar" onPress={handleClick} />
      <Text>nome salvo: {lastName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
