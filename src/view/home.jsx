import { AspectRatio, Box, HStack, Image, NativeBaseProvider, Switch } from "native-base";

export default function Home() {
  return (
    <HStack space={3} justifyContent="center">
      <Image size="xl" source={require('../../assets/logo_elecciones_2023.png')} alt="image" />
    </HStack>
  );  
}