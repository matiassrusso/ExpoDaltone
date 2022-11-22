import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import { useNavigation } from '@react-navigation/native'
import color from '@styles/Colors'

const Pantallas = () =>  {
    const navigation = useNavigation();

        return(
            <View style={[mainStyles.container,{padding: 200}]}>
                
                <View style = {mainStyles.btnTransparent}>
                <TouchableOpacity onPress={()=> navigation.navigate('Camara')}>
                    <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Camara</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Test')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Evaluacion</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate( 'Inicio')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Volver a inicio</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Resultados')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Resultados</Text>
                    </TouchableOpacity>
                </View>
            


            </View>
            
        )
}
export default Pantallas
