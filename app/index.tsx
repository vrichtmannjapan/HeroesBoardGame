import { Image } from 'expo-image';
import { View, StyleSheet } from 'react-native';
import Button from '@/components/Button'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import Input from '@/components/Input'

export default function HomeScreen() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handlerValidadeUser = () =>{
    console.log("VALidade  USER")
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
          onChangeText={setUsername}
        />

        <ThemedText >Password</ThemedText>
        <Input
          placeholder="Password"
          value={password} 
          onChangeText={setPassword}
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
