import { AspectRatio, Box, Image, NativeBaseProvider, Switch } from "native-base";
import { logo } from '../../assets/logo_electoral_2023.png';

export default function Home() {
  return (
    <Box>
        <AspectRatio w="100%" ratio={12 / 9}>
          <Image source={require(logo)} alt="image" />
        </AspectRatio>
    </Box>
  );  
}