import { Flex, Stack, View } from "native-base"
import Card from "../components/card";

export default function Elections() {

  const candidates = [
    { key: '01', name: 'El mono Martinez', photo: 'photo.png',},
    { key: '02', name: 'Pablo José', photo: 'photo.png',},
    { key: '03', name: 'Adán', photo: 'photo.png', },
    { key: '04', name: 'milena cabarcas', photo: 'photo.png',},
  ]
  return (
    <Stack w="100%" height="auto" flexDirection="row" flexWrap="wrap" overflow="hidden" >{
      candidates.map((candidate) => (<Card key={candidate.key} nameCandidate={candidate.name}/>))
    }</Stack>
  );  
} 
