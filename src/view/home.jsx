import React from "react";   
import { AspectRatio, Box, Button, FormControl, HStack, Image, Input, NativeBaseProvider, Stack, Switch, Text } from "native-base";
import { useEffect } from "react";

export default function Home() {

  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {

    if (formData.edad === undefined ) {
      setErrors({ ...errors,
        name:'El campo Correo está vacio',
        password:'El campo Contraseña está vacio'
      })
    return false;
    }
    else if (formData.edad.length === "0" ) {
      setErrors({ ...errors,  
        name: 'esta edad no es valida'
      });
      return false;
    } 
    return true;
  };

  return (
    <Stack alignItems="center" mt={20}>
      <HStack space={3} justifyContent="center">
        <Image size="xl" source={require('../../assets/logo_electoral_2023.png')} alt="image" />
      </HStack>
      <Text mt={10} fontSize={18} fontWeight="semibold">¿Cuántos años tienes?</Text>
      <Stack mt={5} w="50%" maxW="300px" mx="auto" justifyContent="center">
        <FormControl isRequired isInvalid={'edad' in errors} alignItems="center">
          {/* <FormControl.Label></FormControl.Label> */}
          <Input 
            fontSize= "md" 
            placeholder="Edad" 
            w="70%"
            textAlign="center"
            onChangeText={value => setData({ ...formData, edad: value })}
          />
          {'edad' in errors ? 
          <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> : 
            <FormControl.HelperText></FormControl.HelperText>
          }
        </FormControl>
        <Button mt="2" bg="primary.600" colorScheme="indigo" 
          // isLoading isLoadingText="Enviando"
          onPress = {()=> {
            navigation.navigate('elections')
          }} >
          Ir a votar
        </Button>
      </Stack>
    </Stack>
  );  
}