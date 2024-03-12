import { StyleSheet, TouchableOpacity, View, TextInput, Button, Alert } from 'react-native';
import { ButtonCreateAccount, ButtonLogin, ButtonsContainer, Container, Text, TextInput2, Title, Image, InputContainer, ContainerInput } from './styles';

export default function Groups() {

  //const imagePath = require('../../assets/ba.png');
  const imagePath = require('../../assets/bikeanjo.jpg')

  const mailPath = require('../../assets/mail.png');

  const styles = StyleSheet.create({
    

    containerInput: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
     marginTop: 20,
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 10,
      marginBottom: 1,
      marginTop: 30,
      
      height: 60,
      paddingHorizontal: 10,
    },

    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 40,
      //borderColor: 'blue',
      borderWidth: 0,
      marginTop: 5,
      
    },

    container2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 20,
      gap: 20,
      marginBottom: 70,
      marginTop: 50,
    },
    loginButton: {
      backgroundColor: '#00aeef',
      padding: 15,
      borderWidth: 2,
      borderColor: '#00aeef',
      
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    createAccountButton: {
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: '#00aeef',
      padding: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
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
      color: '#00aeef',
      textDecorationLine: 'underline',
    },
  
  });
  
    

  return (
    <Container>

      <Image source={imagePath}  />
   
     <Title>
       Boas vindas ao app BikeAnje! 
     </Title>
     <Text style={{ fontSize: 18 }}>
       Acesse sua conta de pessoa 
       voluntária ou aprendiz.
     </Text>

   

     <View style={styles.inputContainer}
    >
    
    
    <TextInput2
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
        />
        <Image
          source={require('../../assets/mail.png')}
          style={styles.icon}
        />
        </View>

<View style={styles.inputContainer}
    >
        
        <TextInput2
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
    

<View style={styles.container2}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={[styles.buttonText, {color: '#00aeef'}]}>Criar conta</Text>
      </TouchableOpacity>
    </View>

    



    <Text style={{ fontSize: 16 }}>Ou entre com:</Text>
    <View style={styles.container3}>
    
    <Image
          source={require('../../assets/facebook.png')}
          style={{width: 40, height: 40}}
        />
        <Image
          source={require('../../assets/instagram.png')}
          style={{width: 40, height: 40}}
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

