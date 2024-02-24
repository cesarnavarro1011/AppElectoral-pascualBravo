import { Flex, Stack, View } from "native-base"
import Card from "../components/card";

export default function Elections() {
  const candidates = [
    { name: 'El mono Martinez', photo: 'photo.png' },
    { name: 'Pablo José', photo: 'photo.png' },
    { name: 'Adán', photo: 'photo.png' },
    { name: 'Saray gonzalez', photo: 'photo.png'},
  ]

  return (
    <Stack w="100%" height="auto" flexDirection="row" flexWrap="wrap" overflow="hidden" >{
      candidates.map((candidate) => (<Card  key={candidate} nameCandidate={candidate.name}/>))
    }</Stack>
  );  
}
