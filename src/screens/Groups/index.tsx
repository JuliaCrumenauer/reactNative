import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ButtonCreateAccount, ButtonLogin, ButtonsContainer, Container, Text, TextInput, Title } from './styles';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';


export default function Groups() {

  const imagePath = require('../../assets/ba.png');

  const mailPath = require('../../assets/mail.png');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
      
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 50,
      //borderColor: 'blue',
      borderWidth: 0,
      marginTop: 5,
    },
  });

  
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

     <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
        />
        <Image
          source={require('../../assets/mail.png')}
          style={styles.icon}
        />
      </View>
   
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
        />
        <Image
          source={require('../../assets/lock.png')}
          style={styles.icon}
        />
      </View>
    </View>

     {/*<View>
       
       <TextInput
         
         placeholder="E-mail"
         
        
       />
       
        <Image source={mailPath} 
        style={styles.icon}
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

<ButtonsContainer>
<TouchableOpacity>
  <ButtonLogin>
  <Text>Login</Text>
  
  </ButtonLogin>
 
 
  </TouchableOpacity>

  <TouchableOpacity>
  <ButtonCreateAccount>
  <Text>Criar conta</Text>
  </ButtonCreateAccount>
  </TouchableOpacity>
</ButtonsContainer>
    
     {/*} <ButtonsContainer>
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
  </ButtonsContainer> */}

     {/*}
       
     </View>

   
*/}
   

   </Container>
   
  );
  
}

