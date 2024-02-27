import { AspectRatio, Box, HStack, Image, NativeBaseProvider, Switch } from "native-base";
import { SafeAreaView } from "react-native";

export default function Home() {
  return (
    <>
    <SafeAreaView/>
    <HStack space={3} justifyContent="center">
      <Image size="xl" source={require('../../assets/logo_electoral_2023.png')} alt="image" />
    </HStack>
    </>
  );  
}