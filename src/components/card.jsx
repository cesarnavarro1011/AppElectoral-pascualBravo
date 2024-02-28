import React, {useState, useEffect} from 'react';
import { AspectRatio, Badge, Box, Center, Container, Flex, HStack, Heading, Image, Stack, Text, VStack, Button } from "native-base";
import { TouchableOpacity } from 'react-native';

export default function Card(props) {
  const { nameCandidate, candidate, color } = props 
  const [voteCount, setVoteCount] = useState(0);

  return (
    <TouchableOpacity onPress = {() => setVoteCount(voteCount + 1)}>
    <Container maxWidth={80} width={{ base: 178, lg: 200 }} m={1} mt={5} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"  
    }}
    >
    <Box >
      <AspectRatio w="100%" ratio={12 / 9}>
        <Image source={{
        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
      }} alt="image" />
      </AspectRatio>
    </Box>
    <Stack w="100%" p="3" space={0} rounded="lg">
      <Stack space={2}>
        <Heading size="sm" ml="-1">
          {nameCandidate}
        </Heading>
        <Text fontSize="xs" _light={{ color:color}} _dark={{ color: "violet.400" }} fontWeight="600" ml="-0.5" mt="-1" mb="1">
          {candidate}
        </Text>
      </Stack>
      <Text color="coolGray.600" pb="2" fontSize="xs" _dark={{
        color: "warmGray.200" }} fontWeight="400"
      >
        {voteCount} voted
      </Text>
    </Stack>
  </Container>
  </TouchableOpacity>
  )
}

