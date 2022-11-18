import React from 'react'
import {Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/Colors'
import { useNavigation } from '@react-navigation/native'


const Contacto = () =>  {
    const navigation = useNavigation();

        return(
            <View style={[mainStyles.container,{padding: 200}]}>
                
                <View style = {mainStyles.btnTransparent}>
                <TouchableOpacity onPress={()=> navigation.navigate('Test')}>
                    <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Ir al test</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Registro')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Ir al registro</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Inicio')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Volver a inicio</Text>
                    </TouchableOpacity>
                </View>
            


            </View>
            
        )    
}
export default Contacto
