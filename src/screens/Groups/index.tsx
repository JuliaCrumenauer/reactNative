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

    imagem: {
      width: 100,
      height: 100,
    },


    container2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 20,
      gap: 6,
    },
    loginButton: {
      backgroundColor: '#0386D0',
      padding: 15,
      borderRadius: 12,
    },
    createAccountButton: {
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: '#0386D0',
      padding: 15,
      borderRadius: 12,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    container3: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 20,
    },

    container4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
      gap: 24,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: 5,
    },
    forgotPassword: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
  
  });

  
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxToggle = () => {
      setIsChecked(!isChecked);
    };
    

  return (
    <Container>

      <Image source={imagePath} style={styles.imagem} />
   
     <Title>
       Boas vindas ao app BikeAnje! 
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

      <View style={styles.container4}>
      <View style={styles.leftContainer}>
        {/* Checkbox */}
        <Text style={styles.checkbox}>☑</Text>
        <Text>Lembrar senha</Text>
      </View>
      <TouchableOpacity onPress={() => alert('Esqueceu sua senha?')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
    </View>

<View style={styles.container2}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={[styles.buttonText, {color: '#0386D0'}]}>Criar conta</Text>
      </TouchableOpacity>
    </View>

    



    <Text>Ou entre com:</Text>
    <View style={styles.container3}>
    
    <Image
          source={require('../../assets/facebook.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/instagram.png')}
          style={styles.icon}
        />
    </View>


    

     {/*<View>
       



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

