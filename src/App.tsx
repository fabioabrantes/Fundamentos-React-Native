import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ListaProdutos} from './pages/Listas/ListaProdutos';
/* import Pai from './pages/comunicacaoIndireta/Pai'; */
/* import {StyledComponents} from './pages/estilizacao/StyledComponents'; */
/* import {FlexBoxV1} from './pages/layout/FlexboxV1'; */
/* import {RenderCondicional} from './pages/RenderCondicional'; */
/* import Pai from './pages/ComunicacaoDireta/Pai'; */
/* import {Usuario} from './pages/Estados/Usuario'; */
/* import {Contador} from './pages/Estados/Contador'; */
/* import {Props} from './pages/Propos1'; */
/* import {Children} from './pages/RelacaoPaiFilho/Children';
import {Father} from './pages/RelacaoPaiFilho/Father'; */

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Props max={10} min={2} />
      <Props /> */}
      {/*  <Father>
        <Children name="fabio" lastName="abrantes" />
        <Children name="jose" lastName="abrantes" />
        <Children name="jean" lastName="abrantes" />
      </Father> */}
      {/*  <Contador inicial={10} /> */}
      {/*  <Usuario /> */}
      {/*  <Pai /> */}
      {/* <StyledComponents name="fabio abrantes" /> */}
      {/* <FlexBoxV1 /> */}
      {/* <RenderCondicional /> */}
      <ListaProdutos />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default App;
