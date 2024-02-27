import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Switch } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Elections from './src/view/elections';
import 'react-native-gesture-handler';
import Home from './src/view/home';

import { createStackNavigator } from '@react-navigation/stack';
import Winner from './src/view/Winner';

const Stack = createStackNavigator();

const headerShown = () => ({
  headerShown: false
})

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='winner'>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options = {headerShown}
      />
      <Stack.Screen 
        name="elections" 
        component={Elections}
        options = {headerShown}

      />
      <Stack.Screen 
        name="winner" 
        component={Winner} 
        options = {headerShown}

      />
    </Stack.Navigator>
  );
}
export default function App() {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="auto"/>
        <MyStack/>
        </NativeBaseProvider>
    </NavigationContainer>
  );  
}