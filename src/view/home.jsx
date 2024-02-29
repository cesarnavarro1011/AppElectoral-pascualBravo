import React, { useState, useEffect } from 'react';
import { AspectRatio, Box, Button, Container, FormControl, HStack, Image, Input, NativeBaseProvider, Stack, Switch, Text } from "native-base";
import { SafeAreaView } from "react-native";

export default function Home({ navigation }) {

  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [clearInterval, setInterval] = React.useState({});

  const validate = () => {
      
        if (formData.edad === undefined) {
          setErrors({ ...errors,
            edad:'no ha ingresado una edad',
          })
        return false;
        }
        if (formData.edad.length > 2 || formData.edad < 1 ) {
          setErrors({ ...errors,  
            edad: 'esta edad no es valida'
          });
          return false;
        } 
        if (formData.edad < 18 && formData.edad > 1 ) {
          setErrors({ ...errors,  
            edad: 'Eres menor de edad'
          });
          return false;
        } 
        return true;
    };

    const onSubmit = () => {
        validate() ? navigation.navigate('Elections') : console.log('Validation Failed');
      };


  return (
    <Box alignItems="center" mt={16}>
      <SafeAreaView/>
      <HStack space={3} my={10} justifyContent="center">
        <Image size="xl" source={require('../../assets/logo_electoral_2023.png')} alt="image" />
      </HStack>
      <Text mb={5} fontSize={17}>Ingresa tu edad</Text>
      <Stack space={4} w="60%" maxW="300px" mx="auto"  alignItems="center">
        <FormControl alignItems="center" isRequired isInvalid={'edad' in errors}>
          <Input 
            w="70%"
            fontSize= "md" 
            placeholder="edad" 
            onChangeText={value => setData({ ...formData, edad: value })}
          />
          {'edad' in errors ? 
          <FormControl.ErrorMessage>{errors.edad}</FormControl.ErrorMessage> : 
            <FormControl.HelperText></FormControl.HelperText>
          }
        </FormControl>
        <Button w="70%" success  
          // isLoading isLoadingText="Enviando"
          _loading={{onSubmit}}
          startIcon
          onPress = {onSubmit}>
          <Text color="primary.100">Ir a votar</Text>
        </Button>
      </Stack>
    </Box>
  );  
}