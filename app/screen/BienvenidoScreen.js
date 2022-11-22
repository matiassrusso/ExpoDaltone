import React from 'react'
import {Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import color from '@styles/Colors'
import { useNavigation } from '@react-navigation/native'



const Bienvenido = () => {
        const navigation = useNavigation();

  

        return(
            <View style={[mainStyles.container,{paddingTop: 10}]}>
                <Text style={ [mainStyles.unoText,{fontSize: 53}]}>Bienvenido a </Text>
                <Text style={ [mainStyles.unoText,{bottom:35,fontSize: 53 }]}>DALTONE</Text>

                <View style={[loginStyles.logo, {bottom:65, left:7}]}>
                <Image source={require('@recursos/images/DaltoneLogo.png')}
                    style={{ height: 275, width: 275 }} />
            </View>
            <Text style={ [{bottom:50, fontSize: 25, justifyContent:'center'}]}>Te ayudaremos a</Text>
            <Text style={ [{bottom:30, fontSize: 25, justifyContent:'center'}]}> distinguir los colores</Text>

        <View style={[mainStyles.otro2Btn, {bottom:5, top:10}]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Registro')}>
                <Text style={mainStyles.dosText}>¿Empezamos?</Text>
            </TouchableOpacity>
        </View>

        <View style={[{top:50}]}>
        <Text style={[ {right:70, color:'black', fontSize: 24 }, { }, { textAlign: 'center' }, { paddingTop: 25 }, { bottom: 27 }, {}]}>¿Ya tenes cuenta?</Text>

            <TouchableOpacity
          onPress={() => navigation.navigate('Inicio')}>
            <Text style={[{ left:90, color: color.LBLUE, fontSize: 24  }, { textDecorationLine: 'underline' }, { textAlign: 'center' }, { paddingTop: 25 }, { bottom: 80.6 }, {}]}>Inicia sesion</Text>

        </TouchableOpacity>
        </View>
        

            </View>
            
        )
    
        
    
}
export default Bienvenido