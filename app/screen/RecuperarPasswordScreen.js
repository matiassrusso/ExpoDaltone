import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'
import { useNavigation } from '@react-navigation/native'

import ToolBar from '@components/ToolBar'



const Recuperar = () =>  {
    const navigation = useNavigation();

    return(
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{backgroundColor: color.WHITE}}>
            <StatusBar backgroundColor={color.BLACK} translucent ={true}/>
            <ToolBar titulo='Contraseña'
            onPressLeft ={()=> navigation.navigate('Inicio')}
            iconLeft={require('@recursos/images/back.png')}/>
            <View style={[mainStyles.container,{padding: 50}]}>
                <Text style={mainStyles.titleText}> Recuperar{'\n'}contraseña</Text>
                <MyTextInput keyboardType="email-address" placeholder='E-mail' image='user'/>
            <View style = {mainStyles.btnMain}>
                <TouchableOpacity onPress={()=> navigation.navigate('Inicio')}>
                    <Text style={ mainStyles.btntxt}>Recuperar</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        </ScrollView>

    )    
}

export default Recuperar