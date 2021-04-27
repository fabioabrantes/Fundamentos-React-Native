import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// import { Container } from './styles';
interface IProps {
  name: string;
  lastName?: string;
}
export const Children: React.FC<IProps> = ({name, lastName = ''}) => {
  return (
    <View>
      <Text style={styles.txtG}>
        {name} {lastName}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txtG: {
    fontSize: 20,
    textAlign: 'center',
  },
});
