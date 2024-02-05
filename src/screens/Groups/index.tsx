import { Image, TouchableOpacity, View } from 'react-native';
import { ButtonCreateAccount, ButtonLogin, Container, Text, TextInput, Title } from './styles';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';


export default function Groups() {

  const imagePath = require('../../assets/ba.png');

  
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxToggle = () => {
      setIsChecked(!isChecked);
    };

    

  return (
    <Container>

      <Image source={imagePath} />
   
     <Title>
       Bem vinde ao app BikeAnje! 
     </Title>
     <Text>
       Acesse sua conta de pessoa 
       voluntária ou aprendiz.
     </Text>

     <View>
       
       <TextInput
         placeholder="E-mail"
       />

      <TextInput
         placeholder="Senha"
       />


   <CheckBox
   title="Lembrar senha"
   checked={isChecked}
   onPress={handleCheckboxToggle}
   //containerStyle={styles.checkboxContainer}
   //textStyle={styles.label}
   />

    

      <ButtonLogin>
      <TouchableOpacity >
        <Text>Login</Text>
      </TouchableOpacity>
      </ButtonLogin>

      <ButtonCreateAccount>
      <TouchableOpacity>
        <Text>Criar Conta</Text>
      </TouchableOpacity>
      </ButtonCreateAccount>

     
       
     </View>

   
    
   

   </Container>
   
  );
  
}

