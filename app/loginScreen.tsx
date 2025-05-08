import { Image } from 'expo-image';
import { View, StyleSheet, Text } from 'react-native';
import Button from '@/components/ui/Button'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import Input from '@/components/Input'

export default function LoginScreen() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const [correctParameters, setCorrectParameters] = useState<boolean>(false)

  const handlerValidadeUser = () =>{
    let isValid = true;

    if(username.trim() === ''){
      setUsernameError('Username obrigatorio')
      isValid = false;
    }else{
      setPasswordError('')
    }

    if(password.trim() === ''){
      setPasswordError('Password obrigatorio')
      isValid = false;
    }else{
      setPasswordError('')
    }

    if(isValid){
      if(username == "vrichtmann" && password == "P1u2t3o4"){
        setCorrectParameters(true)
      }else{
        setPassword('')
        setPasswordError('Usuario ou senha estao incorretos')
      }
    }
  }

  const  onUsernameChange = (text:string) =>{
    setUsername(text)
    setUsernameError('')
  }

  const onPasswordChange = (text:string) =>{
    setPassword(text)
    setPasswordError('')
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/heroes_bg.png')}
          contentFit='cover'
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.textLogo} >Welcome {'\n'}Heroes 3 board game!</ThemedText>
      </ThemedView>

      <View>
        <ThemedText >Username</ThemedText>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={onUsernameChange}
          error={usernameError}
          correct={correctParameters}
        />

        <ThemedText >Password</ThemedText>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={onPasswordChange}
          error={passwordError}
          correct={correctParameters}
        />

        <Button title="Login" style={{marginTop: 30}} onPress={handlerValidadeUser}/>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    marginBottom: 18,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textLogo: {
    textAlign: 'center'
  }
});
