import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '@screen/LoginScreen'
import RecuperarPasswordScreen from "@screen/RecuperarPasswordScreen";
import MVPScreen from "@screen/MVPScreen";
import SastreScreen from "@screen/SastreScreen";
import NicoScreen from "@screen/NicoScreen";
import TestScreen from "@screen/TestScreen";
import Test from "@screen/Test";
import RegisterScreen from "@screen/RegisterScreen"
import InicioScreen from "@screen/InicioScreen"
import ContactoScreen from "@screen/ContactoScreen"
import BienvenidoScreen from "@screen/BienvenidoScreen"
import ResultadosTest from "@screen/ResultadosTest"




const Stack = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    RecuperarPassword:{
        screen: RecuperarPasswordScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Registro:{
        screen: RegistroScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    MVP:{
        screen: MVPScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Nico:{
        screen: NicoScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Sastre:{
        screen: SastreScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Test:{
        screen: TestScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Test:{
        screen: Test,
        navigationOptions:{
            headerShown: false,
        }
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Inicio:{
        screen: InicioScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    
    Contacto:{
        screen: ContactoScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Bienvenido:{
        screen: BienvenidoScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Resultados:{
        screen: ResultadosTest,
        navigationOptions:{
            headerShown: false,
        }
    },
   
})

export default () => {
    return(
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    )
  }