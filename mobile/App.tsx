
import { NativeBaseProvider, StatusBar} from 'native-base'
import {TEMAS } from './src/styles/temas'
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[500]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
