import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Container, Img, Text, Title } from "../Groups/styles";
import { Container2 } from "./styles";


export default function Home() {
    const imagePath = require('../../assets/bikeanjo.jpg')
        return (
            <Container>
        
              <Img source={imagePath}  />
           
             <Text style={{fontSize: 14}}>
               Nome Sobrenome 
             </Text>
             <Text style={{ fontSize: 18 }}>
               Pessoa voluntária
             </Text>
             <Text style={{ fontSize: 14 }}>
               em Porto Alegre
             </Text>

             <View style={styles.container3}>
             <Img
          source={require('../../assets/calendar.png')}
          style={{height: 40, width: 40}}
        />
        <Img
          source={require('../../assets/notification.png')}
          style={{height: 35, width: 35}}
        />
            </View>
            
            <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={[styles.box, styles.box1]}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Próximas EBAs:</Text>
      <Text style={{fontSize: 14}}>24/03</Text>
      <Text style={{fontSize: 14}}>28/04</Text>
      <Text style={{fontSize: 14}}>30/06</Text>
      <Text style={{fontSize: 14}}>28/07</Text>
      <Text style={{fontSize: 14}}>25/08</Text>
                    </View>
      <View style={[styles.box, styles.box2]}> 
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pessoas próximas:</Text>
      <Text style={{fontSize: 14}}>João <Text style={{color: '#CCCC'}}>(voluntário)</Text></Text>
      <Text style={{fontSize: 14}}>Julia (voluntária)</Text>
      <Text style={{fontSize: 14}}>Nenci (voluntária)</Text>
      <Text style={{fontSize: 14}}>Maria (aprendiz)</Text>
      <Text style={{fontSize: 14}}>Bruno (aprendiz)</Text>
      </View>
      </View>

      <View style={[styles.box, styles.box3]} >
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pessoas voluntárias confirmadas para a EBA 30/03:</Text>
      <Text style={{fontSize: 14}}>Nome Sobrenome</Text>
      <Text style={{fontSize: 14}}>Nome Sobrenome</Text>
      <Text style={{fontSize: 14}}>Nome Sobrenome</Text>
      </View>
      <TouchableOpacity style={styles.confirmPresButton}>
                        <Text>Confirmar presença</Text>
                    </TouchableOpacity>
                
                </View>

             </Container>
             
             
    )
}

const styles = StyleSheet.create({
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        gap: 20,
        
      },

      confirmPresButton: {
        backgroundColor: '#00aeef',
        padding: 15,
        borderWidth: 2,
        borderColor: '#00aeef',
        
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },

      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      },

        box: {
    width: '50%',
    height: 150,
    marginBottom: 10,
  },
  box1: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#8dc63f',
    width: '48%',
    height: 150,
  },
  box2: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#8dc63f',
    width: '48%',
  },
  box3: {
    width: '100%',
    height: 120,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#00aeef' 
  },

  boxContainer: {
    flexDirection: 'row', // Alteração para colocar os boxes lado a lado
    justifyContent: 'space-between', // Espaço igual entre os boxes
    width: '100%', // Largura total
    marginBottom: 10,
  },

  });