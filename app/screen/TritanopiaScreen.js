import React from 'react'
import {Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import color from '@styles/Colors'
import { useNavigation } from '@react-navigation/native'



const Tritanopia = () => {
        const navigation = useNavigation();

  

        return(
            <View style={[mainStyles.container,{paddingTop: 10}]}>
                <Text style={ [mainStyles.unoText,{fontSize: 30}]}>Info de Tritanopia</Text>

                <View style={[loginStyles.logo, {bottom:40, left:7}]}>
                <Image source={require('@recursos/images/Tritanopia.png')}
                    style={{ height: 275, width: 275 }} />
            </View>
            <Text style={ [{bottom:10, fontSize: 20, justifyContent:'center'}]}>Es la ausencia de conos que son sensibles al azul, las personas afectadas no perciben este color.</Text>

        <View style={[mainStyles.otro2Btn, {bottom:5, top:20}]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Pantallas')}>
                <Text style={mainStyles.dosText}>Volver</Text>
            </TouchableOpacity>
        </View>

        <View style={[{top:50}]}>
        
        </View>
        

            </View>
        )
    
        
    
}
export default Tritanopia