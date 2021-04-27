import React from 'react';
import {View, StyleSheet, Text, FlatList, TextComponent} from 'react-native';

import produtos from './produtos';
interface IProduto {
  id: number;
  nome: string;
  preco: number;
}
interface IProdutoItem {
  item: IProduto;
}

export const ListaProdutos: React.FC = () => {
  function obterListaProdutos() {
    return produtos.map(produto => (
      <Text key={`${produto.id}`}>
        O id:{produto.id} é o propduto {produto.nome} que tem preço R$
        {produto.preco}
      </Text>
    ));
  }
  function produtoRender({item}: IProdutoItem) {
    return (
      <Text>
        {item.id} {item.nome} - R$ {item.preco}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtG}>Lista de Produtos</Text>

      {obterListaProdutos()}
      <View style={styles.conatiner2}>
        <FlatList
          data={produtos}
          keyExtractor={item => `${item.id}`}
          renderItem={produtoRender}
        />
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
  txtG: {
    fontSize: 20,
    textAlign: 'center',
  },
  conatiner2: {
    marginTop: 20,
  },
});
