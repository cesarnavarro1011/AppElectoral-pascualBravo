
export default function Winner({ navigation }) {
  return (
    <Container maxWidth={80} width={{ base: 178, lg: 250 }} m={1} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
          {nameCandidate}
        </Heading>
      </Stack>
    </Stack>
  </Container>
  );  
}