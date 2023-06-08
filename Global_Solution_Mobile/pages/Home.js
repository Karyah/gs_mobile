import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import Constants from 'expo-constants';
import Cabecalho from '../components/Cabecalho';

export default function Home({navigation}){
  return(
    <View style={styles.div}>
         <Cabecalho titulo="A fome: como ajudar?"/>
    
      <View style={styles.componentes}>
        <Text style={{fontWeight:'bold'}}>Ajude uma ORG {'\n'}</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo eros, varius nec rutrum vel, pretium eu dolor. </Text>
        <Pressable style={styles.botao} onPress={navigation.navigate('Organizacoes')}><Text style={{fontWeight:'bold'}}>Veja Todas</Text></Pressable>
      </View>
      
  
        <View style={styles.componentes}>
         <Text style={{fontWeight:'bold'}}>Como gestos pequenos podem ajudar: {'\n'}</Text>
         <Text>Um exemplo de iniciativas bem-sucedidas de reciclagem de alimentos é a a compostagem e redistribuição de excendentes, onde alimentos que seriam desperdiçados vão ser reutilizados como uma fonte de sustentável de alimento. Assim, a questão do desperdício não será uma problemática, e podemos implementar a solução em diferentes contextos. Educar a sociedade sobre a realidade da fome global promove mudanças de mentalidade em relação ao consumo e ao desperdício de alimentos. Cada um desempenhando um papel nessa jornada, teremos um consumo consciente e um futuro promissor.</Text>
       
        </View>

    </View>
    );

}

const styles = StyleSheet.create({
  div:{
    flex: 1,
    backgroundColor:'#4F4F4F',  
    paddingTop:Constants.statusBarHeight,
  },

  componentes:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      margin:'5%',
      padding:'5%',
      textAlign:'center',
      backgroundColor:'#BFFFC9',
      width:'90%'
  },
  botao:{
      backgroundColor:'#CC3759',
      padding: '3%',
      marginTop:'5%',
      borderRadius:10,
  },
 
})