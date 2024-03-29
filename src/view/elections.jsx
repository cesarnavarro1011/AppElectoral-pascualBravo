import { Box, Flex, Stack, View } from "native-base"
import Card from "../components/card";
import { SafeAreaView } from "react-native";

export default function Elections({ navigation }) {

  const candidates = [
    { key: '01', name: 'El mono Martinez', candidate: 'Polo', photo: 'photo.png', color: 'yellow.500'},
    { key: '02', name: 'Pablo José', candidate: 'Cambio Radical', photo: 'photo.png', color: 'error.600'},
    { key: '03', name: 'jesus rivero', candidate: 'Centro Historico', photo: 'photo.png', color: 'info.400' },
    { key: '04', name: 'milena cabarcas', candidate: 'Fuerza Ciudadana', photo: 'photo.png', color: 'warning.500'},
  ]
  return (
    <Box>
    <SafeAreaView/>
    <Stack mt={10} w="100%" height="auto" flexDirection="row" flexWrap="wrap" overflow="hidden" >{
      candidates.map((candidate) => (
        <Card key={candidate.key} 
            nameCandidate={candidate.name} 
            candidate={candidate.candidate} 
            color={candidate.color}
            onPress={() => {
              navigation.navigate('Voted',{
                candidate
              })
            }}   
        />))
    }</Stack>
    </Box>
  );  
} 
