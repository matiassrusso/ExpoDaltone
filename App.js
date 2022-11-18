import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Bienvenido from './app/screen/BienvenidoScreen';
import Registro from './app/screen/RegisterScreen';
import Inicio from "./app/screen/InicioScreen"
import MVP from "./app/screen/MVPScreen"
import Recuperar from "./app/screen/RecuperarPasswordScreen"
import Resultados from "./app/screen/ResultadosTest"
import Contacto  from "./app/screen/ContactoScreen"
import Test from "./app/screen/TestScreen"



const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Bienvenido" component={Bienvenido} />
      <Stack.Screen name="Registro" component={Registro}/>
      <Stack.Screen name="Inicio" component={Inicio}/>
      <Stack.Screen name="MVP" component={MVP}/>
      <Stack.Screen name="Recuperar" component={Recuperar}/>
      <Stack.Screen name="Resultados" component={Resultados}/>
      <Stack.Screen name="Contacto" component={Contacto}/>
      <Stack.Screen name="Test" component={Test}/>


      

    </Stack.Navigator>
  )
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}