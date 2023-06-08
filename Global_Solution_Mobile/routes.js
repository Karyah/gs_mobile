import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroUsuario from './pages/CadastroUsuario';
import Login from './pages/Login';
import Home from './pages/Home';
import Organizacoes from './pages/Organizacoes';
import MeuPerfil from './pages/MeuPerfil';
import Doacao from './pages/Doacao';

const Stack = createNativeStackNavigator();

const Routes = () =>{
  return(
    <Stack.Navigator initialRouteName={'CadastroUser'}>
    <Stack.Screen name={'Home'} component={Home} options={{headerShown: false}}/>
 
      <Stack.Screen name={'CadastroUser'} component={CadastroUsuario} options={{headerShown:  false}}/>
      <Stack.Screen name={'Organizacoes'} component={Organizacoes} options={{headerShown:  false}}/>
      
       <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}}/>
    <Stack.Screen name={'MeuPerfil'} component={MeuPerfil} options={{headerShown: false}}/>
     <Stack.Screen name={'Doacao'} component={Doacao} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default Routes;