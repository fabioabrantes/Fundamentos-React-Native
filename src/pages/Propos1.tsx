import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

interface IProps {
  max?: number;
  min?: number;
}
export const Props: React.FC<IProps> = ({max = 1, min = 0}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtG}>
        O valor {max} é maior que o valor {min}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  txtG: {
    fontSize: 20,
    textAlign: 'center',
  },
});
