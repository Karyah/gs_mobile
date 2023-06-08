import {View, Text, StyleSheet, TextInput} from 'react-native';


export default function LabelInput({label, value, onChange}){
  return(
  <View style = {styles.div}>
    <Text style={{color:'#BFFFC9'}}>{label}</Text>
    <TextInput 
    style={styles.textInput}
    value={value}
    onChangeText={(param) => onChange(param)}>
    </TextInput>
  </View>)
  ;
}

const styles = StyleSheet.create({
  div:{
    justifyContent: 'space-between',
    alignItems:'center'
  },
  
  textInput:{backgroundColor : 'white',
      padding: '5%',
      width: '80%', 
      height: '10%',
      fontSize: '35%',
      textAlign: 'center',
      borderRadius: '4%', 
      margin:'2%'}
})