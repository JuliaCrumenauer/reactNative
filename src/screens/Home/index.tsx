import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Img, Text, Title } from "../Groups/styles";
import { ContainerHome, Container2 } from "./styles";


export default function Home() {
    const imagePath = require('../../assets/bikeanjo.jpg')
        return (
            <ContainerHome>

                <View style={[styles.secondContainer]}>
                <Img
          source={require('../../assets/calendar-number.png')}
          style={{height: 25, width: 25}}
        />
                <Img
          source={require('../../assets/person.png')}
          style={{height: 25, width: 25}}
        />
        <Img
          source={require('../../assets/config.png')}
          style={{height: 25, width: 25}}
        />
        <Img
          source={require('../../assets/notification.png')}
          style={{height: 20, width: 20}}
        />
                </View>
        
        <View style={[styles.thirdContainer]}>
              <Img source={imagePath}  />
              
             <Text style={{fontSize: 16, marginTop: 8}}>
               Nome Sobrenome 
             </Text>
             <Text style={{ fontSize: 20 }}>
               Pessoa voluntária
             </Text>
             <Text style={{ fontSize: 16 }}>
               em Porto Alegre
             </Text>
             </View>
{/* 
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
            */}
            <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={[styles.box, styles.box1]}>
                {/*<Img
          source={require('../../assets/calendar-number.png')}
          style={{height: 25, width: 25}}
        />*/}
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Próximas EBAs:</Text>
      <Text style={{fontSize: 14}}>24/03</Text>
      <Text style={{fontSize: 14}}>28/04</Text>
      <Text style={{fontSize: 14}}>30/06</Text>
      <Text style={{fontSize: 14}}>28/07</Text>
      <Text style={{fontSize: 14}}>25/08</Text>
                    </View>
      <View style={[styles.box, styles.box2]}> 
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pessoas próximas:</Text>
      <Text style={{fontSize: 14}}>João <Text style={{color: '#CCCC'}}>(voluntário) <Img
          source={require('../../assets/chat.png')}
          style={{height: 18, width: 18}}
        /></Text></Text>
      <Text style={{fontSize: 14}}>Julia (voluntária) <Img
          source={require('../../assets/chat.png')}
          style={{height: 18, width: 18}}
        /></Text>
      <Text style={{fontSize: 14}}>Nenci (voluntária) <Img
          source={require('../../assets/chat.png')}
          style={{height: 18, width: 18}}
        /></Text>
      <Text style={{fontSize: 14}}>Maria (aprendiz) <Img
          source={require('../../assets/chat.png')}
          style={{height: 18, width: 18}}
        /></Text>
      <Text style={{fontSize: 14}}>Bruno (aprendiz) <Img
          source={require('../../assets/chat.png')}
          style={{height: 18, width: 18}}
        /></Text>
      </View>
      </View>

      <View style={[styles.box, styles.box3]} >
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pessoas voluntárias confirmadas para a EBA 24/03:</Text>
      <Text style={{fontSize: 14}}>Pessoa A</Text>
      <Text style={{fontSize: 14}}>Pessoa B</Text>
      <Text style={{fontSize: 14}}>Pessoa C</Text>
      </View>
      <TouchableOpacity style={styles.confirmPresButton}>
                        <Text style={{color: '#000000'}}>Confirmar presença</Text>
                    </TouchableOpacity>
                
                </View>

             </ContainerHome>
             
             
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
        color: 'white',
        fontWeight: 'bold',
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
        marginBottom: 150,
      },

        box: {
    width: '50%',
    height: 150,
    marginBottom: 20,
  },
  box1: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#8dc63f',
    width: '48%',
    height: 150,
    padding: 8,
    gap: 2, 
    paddingVertical: 4,
    marginTop: -30,
  },
  box2: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#8dc63f',
    width: '48%',
    padding: 8,
    gap: 2, 
    paddingVertical: 4,
    marginTop: -30,
  },
  box3: {
    width: '100%',
    height: 120,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#00aeef',
    padding: 8,
    gap: 2, 
    paddingVertical: 4,
    marginBottom: 14,
  },

  boxContainer: {
    flexDirection: 'row', // Alteração para colocar os boxes lado a lado
    justifyContent: 'space-between', // Espaço igual entre os boxes
    width: '100%', // Largura total
    marginBottom: 10,
  },

  secondContainer: {
    //flex: 1,
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    gap: 10,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 225,
  },

  thirdContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    marginTop: 12,
  }

  });