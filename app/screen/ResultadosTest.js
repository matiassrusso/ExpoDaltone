import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import { useNavigation } from '@react-navigation/native'

import color from '@styles/Colors'



const Resultados = () =>  {
    const navigation = useNavigation();

        return(
            <View style={[mainStyles.container,{paddingTop: 10}]}>
                <Text style={ [{color: 'black',fontSize: 53}]}>Resultados</Text>
                <Text style={ [{color: 'black',fontSize: 53}]}>Test</Text>

                

        <View style={[mainStyles.otro2Btn, {top:120} ]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Registro')}>
                <Text style={mainStyles.dosText}>¿Empezamos?</Text>
            </TouchableOpacity>
        </View>

    
        

            </View>
            
        )
}
export default Resultados