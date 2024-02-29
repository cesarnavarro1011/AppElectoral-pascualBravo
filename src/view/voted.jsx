import { AspectRatio, Badge, Box, Center, Container, Flex, HStack, Heading, Image, Stack, Text, VStack, Button } from "native-base";
import { SafeAreaView } from 'react-native';

export default function Voted({ route, navigation }) {
    const { candidate } = route.params;

  return (
    <Stack alignItems="center">
    <SafeAreaView/>
    <Text mt={32} mb={5} fontSize={20} fontWeight='semibold'>VOTADO</Text>
    <Container maxWidth={80} width={{ base: 230, lg: 250 }} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"  
    }}
    >
    <Box>
      <AspectRatio w="100%" ratio={12 / 9}>
        <Image source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        }} alt="image" />
      </AspectRatio>
    </Box>
    <Stack w="100%" p="3" space={1}>
      <Stack space={2}>
        <Heading size="sm" ml="-1">
          {candidate.name}
        </Heading>
        <Text fontSize="xs" _light={{ color: candidate.color}} _dark={{ color: "violet.400" }} fontWeight="600" ml="-0.5" mt="-1" mb="1">
        {candidate.candidate}
        </Text>
      </Stack>
    </Stack>
  </Container>
  <Box alignItems="center" flexDirection="row" mt="5">
    <Button m="1" onPress={() => {
            navigation.navigate('Winner',{
            candidate
            })
        }}>Resultados</Button>
    <Button m="1" onPress={() => {
            navigation.navigate('Home',{
            candidate
            })
        }}>Votar por otro</Button>
  </Box>
  </Stack>
  );  
}