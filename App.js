import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Switch } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Elections from './src/view/elections';
import 'react-native-gesture-handler';
import Home from './src/view/home';

export default function App() {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="auto"/>
        <SafeAreaView/>
          <Home/>
        </NativeBaseProvider>
    </NavigationContainer>
  );  
}