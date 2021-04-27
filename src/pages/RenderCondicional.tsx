import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Text} from 'react-native';

// import { Container } from './styles';

export const RenderCondicional: React.FC = () => {
  const [name, setName] = useState('');
  const [mostrar, setMostrar] = useState(false);

  function handleClicar() {
    /* if (mostrar) {
      setMostrar(false);
      setName('');
    } else {
      setName(name);
      setMostrar(true);
    } */
    setMostrar(!mostrar);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={name => setName(name)}
      />
      <Button
        title={mostrar ? 'Ocultar nome' : 'Mostrar nome'}
        onPress={handleClicar}
      />
      {mostrar && (
        <View>
          <Text>{name} </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 20,
  },
});
