import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Switch } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Elections from './assets/view/elections';

export default function App() {
  const candidate = [
    { name: 'El mono Martinez', photo: 'photo.png' },
    { name: 'Pablo José', photo: 'photo.png' },
    { name: 'Adán Camacho', photo: 'photo.png' },
    { name: 'Saray gonzalez', photo: 'photo.png'},
  ]

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="auto"/>
        <SafeAreaView/>
        <Elections/>
        </NativeBaseProvider>
    </NavigationContainer>
  );  
}