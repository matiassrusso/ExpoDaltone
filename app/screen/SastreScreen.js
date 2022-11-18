import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import color from '@styles/Colors'
import { useNavigation } from '@react-navigation/native'


const Inicio = () =>  {
    const navigation = useNavigation();

        return(
            <View style={[mainStyles.container,{padding: 200}]}>
                <View style = {mainStyles.btnTransparent}>
                <TouchableOpacity onPress={()=> navigation.navigate('Test')}>
                    <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Ir al test</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate('MVP')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Ir al MVP</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate( 'Inicio')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Volver a inicio</Text>
                    </TouchableOpacity>
                </View>


            </View>
            
        )
    
        
    
}
export default Sastre
