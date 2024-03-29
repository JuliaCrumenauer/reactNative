import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading'

import theme from './src/theme/dark';

import Groups from './src/screens/Groups';
import Home from './src/screens/Home';



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="default"
      />
      { fontsLoaded ?  <Home /> : <Loading /> } 
    </ThemeProvider>
  );
}

