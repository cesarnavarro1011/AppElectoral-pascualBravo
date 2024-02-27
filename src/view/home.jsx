import { AspectRatio, Box, HStack, Image, NativeBaseProvider, Switch } from "native-base";
import { SafeAreaView } from "react-native";

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
    <>
    <SafeAreaView/>
    <HStack space={3} justifyContent="center">
      <Image size="xl" source={require('../../assets/logo_electoral_2023.png')} alt="image" />
    </HStack>
    </>
  );  
}