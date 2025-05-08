import React from 'react'
import {Text , StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'

type ButtonProps = {
    title:string;
    onPress: () => void;
    type?: 'primary' | 'secoundary' | 'outline';
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const Button = ({title, onPress, type = 'primary', style, textStyle}:ButtonProps) =>{
    const {button, text} = styles;

    const styleButtons ={
        primary : {
            button: {backgroundColor: '#007BFF'},
            text: {color: 'white'},
        },
        secoundary : {
            button: {backgroundColor: '#A1CEDC'},
            text: {color: '#1D3D47'},
        },
        outline : {
            button: {backgroundColor:'transparent', borderWidth: 2, borderColor: 2},
            text: {color: '#1D3D47'},
        }, 
    }

    return(
        <TouchableOpacity style={[styles.button, styleButtons[type].button , style]} onPress={onPress}>
            <Text style={[text, styleButtons[type].text ,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '600'
    }
})

export default Button