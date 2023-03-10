import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Bienvenido from './app/screen/BienvenidoScreen';
import Registro from './app/screen/RegisterScreen';
import Inicio from "./app/screen/InicioScreen"
import Pantallas from "./app/screen/PantallasScreen"
import Recuperar from "./app/screen/RecuperarPasswordScreen"
import Resultados from "./app/screen/ResultadosTest"
import Contacto  from "./app/screen/ContactoScreen"
import Test from "./app/screen/TestScreen"
import Camara from "./app/screen/CamaraScreen"
import Protanopia from "./app/screen/ProtanopiaScreen"
import Deuteranopia from "./app/screen/DeuteranopiaScreen"
import Tritanopia from "./app/screen/TritanopiaScreen"

const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Bienvenido" component={Bienvenido} options={{headerShown:false}}/>
      <Stack.Screen name="Registro" component={Registro}/>
      <Stack.Screen name="Inicio" component={Inicio}/>
      <Stack.Screen name="Pantallas" component={Pantallas}/>
      <Stack.Screen name="Recuperar" component={Recuperar}/>
      <Stack.Screen name="Resultados" component={Resultados}/>
      <Stack.Screen name="Contacto" component={Contacto}/>
      <Stack.Screen name="Test" component={Test}/>
      <Stack.Screen name="Camara" component={Camara}/>
      <Stack.Screen name="Protanopia" component={Protanopia}/>
      <Stack.Screen name="Deuteranopia" component={Deuteranopia}/>
      <Stack.Screen name="Tritanopia" component={Tritanopia}/>
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