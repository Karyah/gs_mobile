import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import {Buffer} from 'buffer';

export default function MeuPerfil(){
  const [usuario, setUsuario] = useState(null);

  const request = useCallback(async () => {
    const data = await fetch("http://localhost:8080/usuario/1", {method: "GET", mode: 'cors', headers: {
      // "Authorization": 'Basic ' + Buffer.from("nome" + ":" + "senha").toString('base64'),
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "*",
      "Content-Type": "application/json",

    }})
 
    const result = await data.json();

    setUsuario(result);
  }, [])

  useEffect(() => {
    request()
  }, [])

  return(
    <>
    <Cabecalho titulo='Meu Perfil'/>
    <View style={styles.div}>
      <View>
       
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  div:{
    flex:1,
    display:'flex',
    backgroundColor:'#4f4f4f',
    justifyContent:'space-evenly'
    }
})